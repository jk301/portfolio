
export const projects = [
    {
        title: "Messenger", 
        description: 'A real time messaging app built with socket.IO. Messages arrive instantly without refreshing, users are able to send files.', 
        imgSrc: '/thumbnail/messenger.png', 
        status: 'Online', 
        stack: [
            'React', 
            'Express', 
            'Node', 
            'Socket.io', 
            'JWT', 
            'Passport', 
            'Postgres', 
            'Prisma', 
            'Multer' 
        ], 
        link: 'https://hello-messenger.netlify.app/', 
        repo: 'https://github.com/jk301/messenger-api' 
    },
    {
        title: "Where might waldo be ?", 
        description: "A photo tagging game where you find waldo & his friend/foes. Multiple scenes available with a dynamic scene navigator.", 
        imgSrc: '/thumbnail/waldo.png', 
        status: 'Online', 
        stack: [ 'React', 'Zoom-pinch', 'Express', 'Node', 'Postgres', 'Prisma', 'cron' ], 
        link: 'https://where-might-waldo-be.netlify.app/', 
        repo: 'https://github.com/jk301/waldo-api'
    }, 
    {
        title: "File-Uploader", 
        description: "A file storage web app where user can upload files in their account. Also has a time-limit public sharing option.", 
        imgSrc: '/thumbnail/uploader.png', 
        status: 'Online', 
        stack: [ 'Multer', 'Supabase', 'Express', 'Sess-Auth', 'Node', 'Postgres', 'Prisma', 'EJS' ], 
        link: 'https://uploader-tar2.onrender.com/', 
        repo: 'https://github.com/jk301/uploader'
    }, 
    {
        title: "Battleship", 
        description: "A turned-based game where players take turns firing at the enemy area to sink their ship. Player who has all their ship sunk loses.Has 2 player (screen pass) mode & and AI mode.",  
        imgSrc: '/thumbnail/battleship.png', 
        status: 'Online', 
        stack: [ 'Webpack', 'jest', 'js', 'html', 'css' ], 
        link: 'https://jk301.github.io/battleship-odin/', 
        repo: 'https://github.com/jk301/battleship-odin'
    }  
]