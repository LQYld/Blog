import bandizip from '../../../public/bandizip.png'
import chrome from '../../../public/chrome.png'
import clash from '../../../public/clash.png'
import git from '../../../public/git.png'
import githubdesktop from '../../../public/githubdesktop.png'
import nvm from '../../../public/nvm.png'
import postman from '../../../public/postman.png'
import snipaste from '../../../public/snipaste.png'
import sourceTree from '../../../public/sourceTree.png'
import v2rayN from '../../../public/v2rayN.png'
import vscode from '../../../public/vscode.png'
import potplayer from '../../../public/potplayer.png'
export const Installed_config = {
  expanded: [
    {
      label: 'GitHub Desktop',
      icon: githubdesktop.src,
      introduction: '',
      download: {
        windows:
          'https://desktop.githubusercontent.com/github-desktop/releases/3.2.1-f3241b2b/GitHubDesktopSetup-x64.exe',
        macOS:
          'https://desktop.githubusercontent.com/github-desktop/releases/3.2.1-f3241b2b/GitHubDesktop-x64.zip'
      }
    },
    {
      label: 'Sourcetree',
      icon: sourceTree.src,
      introduction: '',
      download: {
        windows:
          'https://product-downloads.atlassian.com/software/sourcetree/windows/ga/SourceTreeSetup-3.4.12.exe',
        macOS:
          'https://product-downloads.atlassian.com/software/sourcetree/ga/Sourcetree_4.2.2_250.zip'
      }
    },
    {
      label: 'nvm',
      icon: nvm.src,
      introduction: '',
      download: {
        windows: 'https://github.com/coreybutler/nvm-windows/releases',
        macOS: 'https://github.com/coreybutler/nvm-windows/releases'
      }
    },
    {
      label: 'PotPlayer',
      icon: potplayer.src,
      introduction: '',
      download: {
        windows: 'https://potplayer.org/',
        macOS: 'https://potplayer.org/'
      }
    },
    {
      label: 'Bandizip',
      icon: bandizip.src,
      introduction: '',
      download: {
        windows: 'https://cn.bandisoft.com/bandizip/dl.php?old/',
        macOS: 'https://cn.bandisoft.com/bandizip/dl.php?old/'
      }
    },
    {
      label: 'v2rayN',
      icon: v2rayN.src,
      introduction: '',
      download: {
        windows: 'https://github.com/2dust/v2rayN/releases/',
        macOS: 'https://github.com/2dust/v2rayN/releases/'
      }
    },
    {
      label: 'Clash for Windows',
      icon: clash.src,
      introduction: '',
      download: {
        windows: 'https://github.com/Fndroid/clash_for_windows_pkg/',
        macOS: 'https://github.com/Fndroid/clash_for_windows_pkg/'
      }
    },
    {
      label: 'Clash for Windows 汉化补丁',
      icon: clash.src,
      introduction: '',
      download: {
        windows: 'https://github.com/BoyceLig/Clash_Chinese_Patch/releases/',
        macOS: 'https://github.com/BoyceLig/Clash_Chinese_Patch/releases/'
      }
    },
    {
      label: 'Snipaste',
      icon: snipaste.src,
      introduction: '',
      download: {
        windows: 'https://dl.snipaste.com/win-x64-beta/',
        macOS: 'https://dl.snipaste.com/mac-beta/'
      }
    },
    {
      label: 'Postman',
      icon: postman.src,
      introduction: '',
      download: {
        windows: 'https://dl.pstmn.io/download/latest/win64/'
      }
    }
  ],
  Mandatory: [
    {
      label: 'VS Code',
      icon: vscode.src,
      introduction: 'Free. Built on open source. Runs everywhere.',
      download: {
        windows: 'https://code.visualstudio.com/docs/?dv=win64user',
        macOS: 'https://code.visualstudio.com/docs/?dv=osx'
      }
    },
    {
      label: 'Git 64-bit',
      icon: git.src,
      introduction:
        'Git is a free and open source distributed version control system.',
      download: {
        windows:
          'https://github.com/git-for-windows/git/releases/download/v2.40.0.windows.1/Git-2.40.0-64-bit.exe',
        macOS: 'https://git-scm.com/download/mac'
      }
    },
    {
      label: 'Chrome',
      icon: chrome.src,
      introduction: "There's no place like Chrome. Chrome is faster than fast",
      download: {
        windows:
          'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B4520C673-308F-B754-8E0C-0E831E6867AE%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
        macOS: 'https://www.google.cn/intl/zh-CN/chrome/'
      }
    }
  ]
}
