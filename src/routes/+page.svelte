<script>
    import { projects } from "#lib/projects.ts";

    let copy = $state(false)

    async function copyLink () {
        navigator.clipboard.writeText('jk7948677@gmail.com')

        copy = true
        await new Promise(( resolve ) => setTimeout( resolve, 1000 ))
        copy = false
    }
</script>
<div class="about-section">
    <div class="hello-div">
        <h1>HELLO THERE!</h1>
    </div>

    <div class="about-detail">
        <h2>I'm Junaid Khan</h2>
        <p>a full stack web developer. </p>
        <p>You can see my stacks and projects below!</p>
    </div>
</div>

<div class="skill-section">
    <div class="section-header">
        <h1>skill-set</h1>
    </div>

    <div class="skill-container">
        <div class="skill-type-container">
            <h2>Front</h2>
            <div class="skill-card-container">
                <div class="skill-card">
                    <img src="/images/react.svg" alt="react logo">
                    <p>React</p>
                </div>
                <div class="skill-card">
                    <img src="/images/svelte.svg" alt="svelte logo">
                    <p>Svelte</p>
                </div>
            </div>
        </div>

        <div class="skill-type-container">
            <h2>Back</h2>
            <div class="skill-card-container">
                <div class="skill-card">
                    <img src="/images/node.svg" alt="node logo">
                    <p>Node</p>
                </div>
                <div class="skill-card">
                    <img src="/images/express.svg" alt="express logo">
                    <p>Express</p>
                </div>
                <div class="skill-card">
                    <img src="/images/websocket.svg" alt="socket.io logo">
                    <p>Socket.io</p>
                </div>
            </div>
        </div>

        <div class="skill-type-container">
            <h2>Other stacks/tools</h2>
            <div class="skill-card-container">
                <div class="skill-card">
                    <img src="/images/postgres.svg" alt="postgres logo">
                    <p>PostgreSQL</p>
                </div>
                <div class="skill-card">
                    <img src="/images/mongo.svg" alt="mongo logo">
                    <p>MongoDB</p>
                </div>
                <div class="skill-card">
                    <img src="/images/prisma.svg" alt="prisma logo">
                    <p>Prisma ORM</p>
                </div>
                <div class="skill-card">
                    <img src="/images/git.svg" alt="Git logo">
                    <p>Git</p>
                </div>
                <div class="skill-card">
                    <img src="/images/sql.svg" alt="SQL logo">
                    <p>SQL</p>
                </div>
                <div class="skill-card">
                    <img src="/images/js.svg" alt="Javascript logo">
                    <p>JavaScript</p>
                </div>
                <div class="skill-card">
                    <img src="/images/ts.svg" alt="Typescript logo">
                    <p>TypeScript</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="project-section">
    <div class="section-header">
        <h1>Projects</h1>
    </div>

    <div class="project-card-container">
        {#each projects as project}

            <div class="project-card">
                <img src={project.imgSrc} alt={project.title}>

                <div class="project-card-detail">
                    <h2>{project.title}</h2>
                    <p>Status: {project.status}</p>
                    <h4>{project.description}</h4>

                    <div class="project-stack">
                        {#each project.stack as stack }
                            <p>{stack}</p>
                        {/each}
                    </div>

                </div>

                <div class="project-card-buttons">
                    <a href={project.link} target="_blank" ><button>Live site link</button></a>
                    <a href={project.repo} target="_blank" ><button>Repo link</button></a>
                </div>

            </div>

        {/each}

    </div>

    <h3>More projects are available <a href="https://github.com/jk301" target="_blank">here</a></h3>
    
</div>


<div class="contact-section">
    <div class="section-header">
        <h1>contact details</h1>
    </div>

    <div class="contact-text" >
        <h4>If you have some query about anything here or about anything (literally) like the header here are too BIG (ik) etc.</h4>
        <h4>please do send me an email :)</h4>
    </div>

    <div class="email-container">
        <div class="email">
            <p>jk7948677@gmail.com</p>
        </div>
        <button class="copy-button" onclick={copyLink}>
            <img 
                class="copy-svg" 
                src={copy ? '/images/tick.svg' : '/images/copy.svg'} 
                alt={copy ? 'Copied' : 'Copy email'}>
        </button>
    </div>
    
</div>

