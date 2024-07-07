/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const terminalContent = document.getElementById('terminal-content');
    const commands = [
        "[WISP] Server marked as STARTING",
        "[WISP] Checking size of server data directory...",
        "[WISP] Disk Usage: 4124M / 0M",
        "[WISP] Ensuring file permissions.",
        "[WISP] Running server preflight.",
        "[WISP] Starting server container.",
        "steam user is not set.",
        "Using anonymous user.",
        "WARNING: setlocale('en_US.UTF-8') failed, using locale: 'C'. International characters may not work.",
        "Redirecting stderr to '/home/container/Steam/logs/stderr.txt'",
        "Logging directory: '/home/container/Steam/logs'",
        "[  0%] Checking for available updates...",
        "[----] Verifying installation...",
        "UpdateUI: skip show logoSteam Console Client (c) Valve Corporation - version 1718904263",
        "-- type 'quit' to exit --",
        "Loading Steam API...OK",
        "Connecting anonymously to Steam Public...OK",
        "Waiting for client config...OK",
        "Waiting for user info...OK",
        "Success! App '4020' already up to date.",
        "container@pterodactyl~ ./srcds_run -game garrysmod -console -port 27015 +ip 0.0.0.0 +host_workshop_collection +map gm_flatgrass +gamemode sandbox -strictportbind -norestart +sv_setsteamaccount 887F62A64D3F4FB21B5CC92990D40E37 +maxplayers 32 -tickrate 22 -disableluarefresh",
        "Auto detecting CPU",
        "Using default binary: ./srcds_linux",
        "Game_srv.so loaded for Garrys Mod",
        "Setting breakpad minidump AppID = 4000",
        "Initializing Steam libraries for Workshop..",
        "[S_API] SteamAPI_Init(): Loaded local 'steamclient.so' OK.",
        "CAppInfoCacheReadFromDiskThread took 5 milliseconds to initialize",
        "SteamInternal_SetMinidumpSteamID:  Caching Steam ID:  76561197960265728 [API loaded no]",
        "[S_API FAIL] Tried to access Steam interface SteamUser023 before SteamAPI_Init succeeded.",
        "WS: No +host_workshop_collection or it is invalid!",
        "Unknown command cl_cmdrate",
        "Unknown command cl_updaterate",
        "Unknown command rate",
        "host_workshop_collection = ",
        "game",
        "Network: IP 0.0.0.0, mode MP, dedicated Yes, ports 27015 SV / 27005 CL",
        "Error loading cfg/trusted_keys_base.txt",
        "Error loading cfg/pure_server_minimal.txt",
        "PREP OK",
        "Executing dedicated server config file server.cfg",
        "Using map cycle file cfg/mapcycle.txt.",
        "Initializing Steam libraries for secure Internet server",
        "[S_API] SteamAPI_Init(): Loaded local 'steamclient.so' OK.",
        "CAppInfoCacheReadFromDiskThread took 6 milliseconds to initialize",
        "SteamInternal_SetMinidumpSteamID:  Caching Steam ID:  76561197960265728 [API loaded no]",
        "Logging into Steam game server account",
        "'banned_ip.cfg' not present; not executing.",
        "'banned_user.cfg' not present; not executing.",
        "Connection to Steam servers successful.",
        "Public IP is 135.148.150.78.",
        "Assigned persistent gameserver Steam ID [G-1:9683825].",
        "[WISP] Server marked as ON",
        "VAC secure mode is activated."
    ];

    let index = 0;
    let charIndex = 0;

    function typeCommand() {
        if (index < commands.length) {
            const command = commands[index];
            if (charIndex < command.length) {
                terminalContent.textContent += command.charAt(charIndex);
                charIndex++;
                setTimeout(typeCommand, 10); // Adjust typing speed here
            } else {
                terminalContent.textContent += '\n';
                charIndex = 0;
                index++;
                setTimeout(typeCommand, 500); // Adjust delay between commands here
                terminalContent.scrollTop = terminalContent.scrollHeight; // Auto-scroll to bottom
            }
        }
    }

    typeCommand();

    // Disable manual scrolling
    terminalContent.addEventListener('wheel', (e) => {
        e.preventDefault();
        terminalContent.scrollTop = terminalContent.scrollHeight;
    });
});
