import {
    findFirstNode,
    RoutingProps,
    SidebarLayout,
    useRouter,
    withMosaicProvider,
    withPersistenceBoundary,
    withQueryClientProvider,
    withStyles,
} from '@stoplight/elements-core';
import * as React from 'react';
import { Link, Redirect, Route, useHistory, useParams } from 'react-router-dom';

import { BranchSelector } from '@stoplight/elements-dev-portal/components/BranchSelector';
import { DevPortalProvider } from '@stoplight/elements-dev-portal/components/DevPortalProvider';
import { Loading } from '@stoplight/elements-dev-portal/components/Loading';
import { NodeContent } from '@stoplight/elements-dev-portal/components/NodeContent';
import { NotFound } from '@stoplight/elements-dev-portal/components/NotFound';
import { TableOfContents } from '@stoplight/elements-dev-portal/components/TableOfContents';
import { UpgradeToStarter } from '@stoplight/elements-dev-portal/components/UpgradeToStarter';
import { ResponseError } from '@stoplight/elements-dev-portal/handlers/getNodeContent';
import { useGetBranches } from '@stoplight/elements-dev-portal/hooks/useGetBranches';
import { useGetNodeContent } from '@stoplight/elements-dev-portal/hooks/useGetNodeContent';
import { useGetTableOfContents } from '@stoplight/elements-dev-portal/hooks/useGetTableOfContents';


const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);


export interface StoplightProjectProps extends RoutingProps {
    /**
     * The ID of the Stoplight Project.
     * @example "d2s6NDE1NTU"
     */
    projectId: string;
    /**
     * If your company runs an on-premise deployment of Stoplight,
     * set this prop to point the StoplightProject component at the URL of that instance.
     */
    platformUrl?: string;

    /**
     * Allows to hide TryIt component
     */
    hideTryIt?: boolean;

    /**
     * Allows to hide mocking button
     */
    hideMocking?: boolean;

    /**
     * If set to true, all table of contents panels will be collapsed.
     * @default false
     */
    collapseTableOfContents?: boolean;
}



const StoplightProjectImpl: React.FC<StoplightProjectProps> = ({
    projectId,
    hideTryIt,
    hideMocking,
    collapseTableOfContents = false,
}) => {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [hideOpen, setHideOpen] = React.useState(false);
    function toggleMenu() {

    }
    const container = React.useRef<HTMLDivElement>(null);

    React.useEffect(s => {
        //debugger
        if (window.innerWidth < 600) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
            setHideOpen(true);
        }
    }, [])
    React.useEffect(s => {
        //debugger
        if (window.innerWidth < 600) {
            container.current.children[1].style.padding = "10px"
        } else {
            container.current.children[1].style.padding = "100px"
        }
    }, [menuOpen])
    const { branchSlug = '', nodeSlug = '' } = useParams<{ branchSlug?: string; nodeSlug: string }>();
    const history = useHistory();

    const { data: tableOfContents, isFetched: isTocFetched } = useGetTableOfContents({ projectId, branchSlug });
    const { data: branches } = useGetBranches({ projectId });
    const {
        data: node,
        isLoading: isLoadingNode,
        isError,
        error: nodeError,
    } = useGetNodeContent({
        nodeSlug,
        projectId,
        branchSlug,
    });


    if (!nodeSlug && isTocFetched && tableOfContents?.items) {
        const firstNode = findFirstNode(tableOfContents.items);
        if (firstNode) {
            return <Redirect to={branchSlug ? `/branches/${branchSlug}/${firstNode.slug}` : `/${firstNode.slug}`} />;
        }
    }

    let elem: JSX.Element;
    if (isLoadingNode || !isTocFetched) {
        elem = <Loading />;
    } else if (isError) {
        if (nodeError instanceof ResponseError && nodeError.code === 402) {
            elem = <UpgradeToStarter />;
        } else {
            elem = <NotFound />;
        }
    } else if (!node) {
        elem = <NotFound />;
    } else {
        elem = <NodeContent node={node} Link={Link} hideTryIt={hideTryIt} hideMocking={hideMocking} />;
    }

    const handleTocClick = () => {
        if (container.current) {
            if (window.innerWidth < 600) {
                container.current.children[1].style.padding = "10px"
                setMenuOpen(false);
            } else {
                container.current.children[1].style.padding = "100px"
                setMenuOpen(true)
            }

        }

    };
    if (tableOfContents)
        tableOfContents.hide_powered_by = true;
    return (
        <div>

            <SidebarLayout
                ref={container}
                sidebarWidth={menuOpen ? 300 : 40}
                sidebar={
                    <>
                        {!hideOpen && <div style={{ textAlign: "right", paddingRight: 10, paddingLeft: 10, }}><button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <img style={{ height: 20, width: 20 }} src="/static/images/icon/left-arrow.png" />
                                : <img style={{ height: 20, width: 20 }} src="/static/images/icon/right-arrow.png" />}
                        </button>
                        </div>}
                        {menuOpen && branches && branches.length > 1 ? (
                            <BranchSelector
                                branchSlug={branchSlug}
                                branches={branches}
                                onChange={branch =>
                                    history.push(branch.is_default ? `/${nodeSlug}` : `/branches/${branch.slug}/${nodeSlug}`)
                                }
                            />
                        ) : null}
                        {menuOpen && tableOfContents ? (
                            <TableOfContents
                                activeId={node?.id || ''}
                                tableOfContents={tableOfContents}
                                Link={Link}
                                collapseTableOfContents={collapseTableOfContents}
                                onLinkClick={handleTocClick}
                            />
                        ) : null}
                    </>
                }
            >
                {elem}

            </SidebarLayout>

        </div>
    );
};

const StoplightProjectRouter = ({ platformUrl, basePath = '/', router, ...props }: StoplightProjectProps) => {
    const { Router, routerProps } = useRouter(router ?? 'history', basePath);

    return (
        <DevPortalProvider platformUrl={platformUrl}>
            <Router {...routerProps} key={basePath}>
                <Route path="/branches/:branchSlug/:nodeSlug" exact>
                    <StoplightProjectImpl {...props} />
                </Route>

                <Route path="/:nodeSlug" exact>
                    <StoplightProjectImpl {...props} />
                </Route>

                <Route path="/" exact>
                    <StoplightProjectImpl {...props} />
                </Route>
            </Router>
        </DevPortalProvider>
    );
};

/**
 * The StoplightProject component displays a traditional documentation UI for an existing Stoplight Project.
 */
export const StoplightProject = pipe(
    withStyles,
    withPersistenceBoundary,
    withMosaicProvider,
    withQueryClientProvider,
)(StoplightProjectRouter);