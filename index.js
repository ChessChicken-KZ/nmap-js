const { Plugin } = require('powercord/entities');
const execSync = require('child_process').execSync;


module.exports = class NMAPJS extends Plugin
{
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'nmap',
      description: 'NMAP IP or smth like that',
      usage: '{c} [ip]',
      executor: async args => {
    

        let output = execSync('nmap '.concat(args), { encoding: 'utf-8' });

        return {
            send: false,
            result: output
          };
    }
    });
  }

  pluginWillUnload ()
  {
    powercord.api.commands.unregisterCommand('nmap');
  }
};