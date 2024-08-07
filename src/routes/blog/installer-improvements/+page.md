---
title: Improvements to the Spyder IDE installation experience
author: dalthviz
pub_date: 2022-11-30
category: Announcement
tags: milestone, new-feature, installers
summary: Spyder 5.4.0 was released recently, featuring some major enhancements to the Windows and macOS standalone installers. You'll now get more detailed feedback when new versions are available, and you can download and start the update to them from right within Spyder, instead of having to install them manually. Read on to learn how these new update features work and how to use them.
---

_[Juan Sebastian Bautista](https://github.com/jsbautista), [C.A.M. Gerlach](https://github.com/CAM-Gerlach) and [Carlos Cordoba](https://github.com/ccordoba12) also contributed to this post._

[Spyder 5.4.0](https://github.com/spyder-ide/spyder/releases/tag/v5.4.0) was released recently, featuring some major enhancements to its Windows and macOS standalone installers.
You'll now get more detailed feedback when new versions are available, and you can download and start the update to them from right within Spyder, instead of having to install them manually.
In this post, we'll go over how these new update features work and how you can start using them!

Before proceeding, we want to acknowledge that this work was made possible by [a Small Development Grant](https://github.com/spyder-ide/spyder/wiki/NumFOCUS-Small-Development-Grant-2022) awarded to Spyder by [NumFOCUS](https://numfocus.org/), which has enabled us to hire a new developer ([Juan Sebastian Bautista Rojas](https://github.com/jsbautista)) to be in charge of all the implementation details.

Before these improvements, Spyder already had a mechanism to detect more recent versions, but that functionality was very simple.
There was a pop-up dialog warning that a new version was available, but users had to follow a link to manually download the installer and then run it themselves:

![Update available dialog from Spyder version 5.3.3 to 5.4.0 - Old update available dialog](update-available-old.png)

Once you upgrade to Spyder 5.4.0 or above, you'll get this message on future Spyder updates:

![Update available dialog from Spyder version 5.4.0 to 5.4.1 - New update available dialog](update-available-new.png)

Spyder will now be able to automatically download and install a new version for you, much like many other popular applications.

After clicking "Yes" on that dialog, Spyder will display another with the status and percent completion of the download.

![Dialog downloading Spyder 5.4.1 installer](download-status.png)

If it is closed, the download will continue in the background, with its progress shown in a new status bar widget.

![User clicking the update status in the taskbar to monitor the download status](downloading-update.gif)

After the download completes, Spyder will ask if you want to update immediately, cancel the update or defer it to when you close Spyder, to avoid interrupting your current workflow.

![Options available to run installer, run installer after Spyder closes or not run it at all](starting-update.gif)

If you chose to update immediately, or once you close Spyder if you deferred the update, our installer will be started automatically.
On Windows, the installer has a series of automated prompts to close the current instance, uninstall the previous version and finally install the new one:

![Series of screenshots of installation steps, with arrows between: Yes/no dialog to close spyder, confirm close dialog, uninstall old version dialog, uninstalling status and finally installation wizard](installation-flow.png)

On macOS, Spyder will automatically mount the new version's DMG, so you can simply drag and drop it in the Applications folder

![macOS new version's DMG mounted with a drag and drop dialog to move new Spyder version into the Application folder](macos-dmg.png)

We hope these improvements will make updating to future Spyder versions smoother and more straightforward, so we can bring you new features and enhancements more easily in the future!
