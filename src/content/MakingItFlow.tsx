import Heading from "../components/Heading"
import Image from "../components/Image"
import Layout from "../components/Layout"
import Paragraph from "../components/Paragraph"
import SubHeading from "../components/SubHeading"

import GITGLOW_DIAGRAM from "/GitFlowDiagram.png"
import GITHUBFLOW_DIAGRAM from "/GitHubFlowDiagram.png"
import GITLABFLOW_DIAGRAM from "/GitLabFlowDiagram.png"
import BRANCHING_STRATEGY from "/BranchingStrategy.png"

const MakingItFlow = () => {
    return (
        <Layout>
            <Heading text="Making it flow (Github and Branching Strategies)" date="April-17-2023" />

            <Paragraph>
                Recently, I got into a slight problem, the problem was that the team had no
                proper workflow for managing their web apps. The typical process went from writing
                code and then testing it locally and then straight to the deployment. You can already
                see the dangers that we were being invited with this process. What if, at some point of
                time the developer forgets to check and pushes the code to production? It will be a disaster
                because then there is no way to push back in case there is an issue. Plus the team was also
                facing issues with collaboration whereby one developer was completely isolated from others and
                feedback was very hard since they weren't managing the code in a repository.
            </Paragraph>

            <Paragraph>
                After seeing all this happening, I decided to introduce a proper workflow for the development as
                well as the production process. The very first thing that we did was to push all the latest code to
                a github repository so that It comes to a central place where all developers can access it.
            </Paragraph>

            <Paragraph>
                Pushing the code to a repository is one thing, managing the workflow is another. The next thing that
                I had to do was to decide the workflow that was to be used. By workflow, I mean the process of going from
                feature development to staging and then to production.
            </Paragraph>

            <Paragraph>
                There are several strategies available such as:
            </Paragraph>

            <SubHeading text="1. GitFlow" />

            <Paragraph>
                Considered a bit complicated and advanced for many of the today's projects. GitFlow strategy
                allows developers to work parallely. Traditionally, we have all the code on 'Main' or 'Master'
                branch but in GitFlow we have the following branches. 'Master', 'Develop', 'Feature', 'Relase'
                and 'Hotfix' branch.
            </Paragraph>

            <Image image={GITGLOW_DIAGRAM} height="h-[600px]" />

            <Paragraph>
                We can already see the how comprehensive yet at the same time complex GitFlow is. The main
                drawback of this strategy is that developers are lost in the sea of commits because of so many
                active branches.
            </Paragraph>

            <SubHeading text="2. GitHub Flow" />

            <Paragraph>
                A simpler alternative to the GitFlow strategy. In Github Flow, we only have two branches, one
                is 'Master' or 'Main' branch and the other one is 'Feature' branch on which the developers work
                and then any new change is directly merged with the Master/Main branch from the feature branch. This
                keeps things clean and allows for the main code to be always in a state of continuous integration and
                continuous delivery.
            </Paragraph>

            <Image image={GITHUBFLOW_DIAGRAM} height="h-[300px]" />

            <Paragraph>
                The feature branch is where developers implement new features. After the implementation, using pull requests,
                the code is reviewed and is merged with the Master/Main branch.
            </Paragraph>

            <SubHeading text="3. GitLab Flow" />

            <Paragraph>
                GitLab Flow is also a branching strategy. In GitLab Flow there are three main branches namely 'Master/Main',
                'Pre-Production' and 'Production'. Before going into production, the code first goes through pre-production
                which makes sure that any conflict is resolved before going to production.
            </Paragraph>

            <Image image={GITLABFLOW_DIAGRAM} height="h-[500px]" />

            <SubHeading text="Decision, Decisions, Decisions ..." />

            <Paragraph>
                After getting the know how of all branching strategies, it was time to adopt a branching strategy for the projects,
                that I am working on. After long discussion and feedback from every member, we decided the following structure.
            </Paragraph>

            <Image image={BRANCHING_STRATEGY} height="h-[500px]" />

            <Paragraph>
                We have a main/master branch where the production code lies. The Develop branch contains all the development code, that is,
                the code that has not been pushed to main/master yet. Developers will create their own feature branch and work on their own feature
                and merge it with Develop branch. Pull requests will be used to review and give feedback and if all is set, the code in develop branch
                will be merged with main/master.
            </Paragraph>

            <Paragraph>
                The best things about this pattern is that, there is testing website and the production website. The testing website is always watching develop
                branch for changes, if it changes the testing website will also update where we can test the website and confirming if the features are working
                as intended. The production site is always watching for changes in main/master so if we have everything good to go in develop branch then we will
                merge it with the main/master which will automatically deploy the latest changes in the production site.
            </Paragraph>

        </Layout>
    )
}

export default MakingItFlow