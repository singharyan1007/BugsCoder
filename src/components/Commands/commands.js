/* eslint-disable import/no-anonymous-default-export */
export default {
  commands: {
    echo: {
      description: "Prints the given text to the console",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "About Me.",
      usage: "about",
      fn: () => {
        return "About Me.\n---\nmale\n21\nstudent\ndev\nnephophile\nweeb\nlover\n“I’m good at reading people. My secret? I look for the worst in them.”\n---\n";
      },
    },
    anime: {
      description: "Opens my favourite anime.",
      usage: "twitter",
      fn: () => {
        window.open("https://animixplay.to/anime/44511/Chainsaw_Man", "_blank");
        return "opening my favourite anime...";
      },
    },
    github: {
      description: "Opens my GitHub Profile.",
      usage: "twitter",
      fn: () => {
        window.open("https://github.com/singharyan1007", "_blank");
        return "opening github account...";
      },
    },
    discord: {
      description: "Opens my LinkedIn Account.",
      usage: "twitter",
      fn: () => {
        window.open("https://linkedin.com/in/aryan-singh1007", "_blank");
        return "opening linkedin account...";
      },
    },
    languages: {
      description: "Languages I know.",
      usage: "languages",
      fn: () => {
        return `
                    these are the languages I know.\n---\n
                    english          - 70%
                    hindi            - 100%
                    gen-z-langauge   - 00%
                    python           - 10% - [learning]
                    javascript       - 60%
                    html5            - 90%
                    css3             - 80%
                    java             - 10% - [learning]\n---\n
                `;
      },
    },
    skills: {
      description: "Skills I have.",
      usage: "skills",
      fn: () => {
        return `
                    these are the skills I have.\n---\n
                    watching anime   - 100%
                    coding           - 50%
                    studying         - 10%
                    overthinking     - 100%
                    social-skills    - 50%
                    writing-poems    - 100%\n---\n
                `;
      },
    },
    projects: {
      description: "Projects I have worked on.",
      usage: "projects",
      fn: () => {
        return `
                    Cool projects I have worked on.\n---\n
                    'BugsCoder'                       | 'terminal portfolio'   | 'javascript'
                    'chatapp'                         | 'realtime chat app'    | 'javascript'
                    'playchess'                       | 'realtime chess game'  | 'javascript'
                    'task-manager'                    | 'nodejs crud app'      | 'javascript'
                    'campusconnect'                   | 'my startup'           | 'python,javascript'
                    'yourflats'                       | 'realestate-app'       | 'javascript'\n---\n
                `;
      },
    },
    editor: {
      description: "Details about my current editor",
      usage: "editor",
      fn: () => {
        return `
                    Editor: Visual Studio Code\n
                    Theme : Github-dark\n
                    Font  : Hack-Nerd\n
                    Shell : zsh\n
                    Distro: Kali\n
                    Vim   : LunarVim\n
                `;
      },
    },
    repo: {
      description: "Opens this website's github repository.",
      usage: "repo",
      fn: () => {
        window.open("https://github.com/singharyan1007/BugsCoder", "_blank");
        return "opening repository...";
      },
    },
    spotify: {
      description: "Get info about my favourite songs.",
      usage: "spotify",
      fn: () => {
        return `
                Smells like teen spirit by Nirvana\n
                Creep by Radiohead\n
                Exit music by Radiohead\n
                Just a Shred by Hugo\n
                `;
      },
    },
  },
  overwrites: {
    help: {
      description: "List all available commands",
      usage: "help",
    },
    cd: {
      description: "Change directory, not really, lol!",
      usage: "cd <directory>",
    },
    ls: {
      description: "List files in the current directory",
      usage: "ls",
    },
    mkdir: {
      description: "Make a directory",
      usage: "mkdir <directory>",
    },
    clear: {
      description: "Clears the terminal",
      usage: "clear",
    },
  },
};
