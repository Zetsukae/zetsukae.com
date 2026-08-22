---
title: "How to Prepare to Install 'Linux'?"
link: install-linux
catalog: true
date: 2026-08-22 20:00:00
tags:
  - Tutorials
  - Linux
categories:
  - Notes
---

*Calm down!* I will explain — actually, it's pretty simple! You just need:

* **USB Drive:** At least **8 GB** of storage.
* **Internet Connection:** A fast connection is preferable.
* **A Computer:** (We can install Linux on Android too, but that's a story for another tutorial!).

Yeah! That's all!

---

## Ready? Let's Find Your Distribution!

Power up your PC and choose a [Linux distribution](https://en.wikipedia.org/wiki/Linux_distribution). 

> 💡 **Not sure which one to pick?** You can test them directly in your browser on [DistroSea](https://distrosea.com/)!
> * **For Beginners:** Ubuntu or Linux Mint.
> * **For Gamers:** Nobara Linux or Bazzite.

### Where to Download the Distribution?
Simply search on Google (or your preferred search engine) for your distribution's ISO file (*e.g.*: [Nobara Linux ISO Download](https://lmgtfy.com/?q=Nobara+Linux+ISO+Download)). 

Download the `.iso` file directly from the **official website**.

---

## Creating the Bootable USB Drive

Now, you need a tool to make your USB drive bootable. You can use either [Rufus](https://rufus.ie/en/) or [Ventoy](https://www.ventoy.net/en/index.html).

> 💡 **Recommendation:** I strongly recommend **Ventoy** if you think you might want to try or switch distributions in the future!

---

### Option A: Using Rufus

1. Download Rufus from the [Official Website](https://rufus.ie/en/) and launch it.
2. Plug in your USB drive.
3. In Rufus, configure the settings as shown below:

![Rufus Ubuntu Bootable USB Configuration](https://i.imgur.com/XCPAVZj.png)

> ⚠️ **WARNING:** This process will **ERASE ALL DATA** on your USB drive! Backup any important files first.

4. Under **Device**, select your USB drive.
5. Under **Boot selection**, click **SELECT** and choose the downloaded ISO file.
6. Leave the default settings as they are (unless your distribution specifies otherwise).
7. Click **START**, wait for the process to finish, then close Rufus.

---

### Option B: Using Ventoy

1. Download Ventoy from the [Official Website](https://www.ventoy.net/en/download.html) and launch `Ventoy2Disk`.
2. Plug in your USB drive and select it under the **Device** section.

![Ventoy2Disk USB Flashing Interface](https://i.imgur.com/o0PmCUv.png)

> ⚠️ **WARNING:** Clicking **Install** will **ERASE ALL DATA** on your USB drive!

3. Click **Install**.
4. Once installed, you will see `Ventoy In Device` displayed with status details (*e.g.*, `exFAT MBR`).
5. Open your File Explorer: a new drive named **Ventoy** will appear.
6. Simply **drag and drop your ISO file** directly into the Ventoy drive.

---

## Dual-Booting: Preparing Space for Windows & Linux

If you want to keep Windows alongside Linux, you need to create free space on your hard drive.

1. On Windows 10 or 11, press **`Windows + X`** and select **Disk Management**.

![Windows Disk Management Interface](https://i.imgur.com/jEcaR0N.png)

2. Right-click on your primary Windows partition (usually **`C:`**) and select **Shrink Volume**.
3. Choose how much space you want to allocate to Linux.
   > 💡 **Tip:** A 50/50 split works well. For a 500 GB drive, enter **`250000` MB** to shrink.
4. Click **Shrink**. You will now see a black box labeled **"Unallocated space"**. *Leave it as it is!*

---

## Booting into Linux

1. Shut down your computer.
2. Find the key needed to open your motherboard's **UEFI/BIOS** or **Boot Menu** (usually `F2`, `F11`, `F12`, `DEL`, or `ESC`).
3. Plug in your USB drive and power on your PC while tapping the Boot Key.
4. In the Boot Options, select your **USB Drive**.
5. Save and exit (usually `F10`) to restart.

### What Happens Next?

* **Ventoy Users:** A menu listing your ISO file will appear. Highlight it and press `Enter` twice.
* **Rufus Users:** The drive will boot directly into the installer.

You will see the GRUB menu:

![GNU GRUB Ubuntu Boot Menu Interface](https://i.imgur.com/G6EMQNE.png)

Select **"Try or Install [Distro Name]"** and press `Enter`. Your PC will boot into a live Linux session!

---

## Completing the Installation

Once the live environment loads, open the **"Install [Distro Name]"** application on your desktop.

> ⚠️ **CRITICAL STEP FOR DUAL-BOOT USERS:**  
> When choosing the installation target, select **"Install alongside Windows"** or manually select the **Unallocated Space** you created earlier.  
> **DO NOT** select "Erase disk", or you will completely wipe Windows and your personal files!
>
> 📖 Need help with partitioning? Check out this [Dual-Booting Guide for Ubuntu](https://www.instructables.com/Dual-Booting-Windows-and-Ubuntu/).

---

## 🎉 Congratulations! You've Installed Linux!

You made it! Installing a new operating system is a big step, and you did it! Welcome to the Linux community! 

Now you can customize your setup, explore new software, and tweak your **Desktop Environment** to your liking.

---

> You can see the website-tuto [here](https://zetsukae.github.io/Install-Linux-For-The-First-Time/)

### 📖 Quick Vocabulary Guide

* **Distribution (Distro):** An operating system built on top of the Linux kernel (*e.g.*, Ubuntu, Fedora, Arch).
* **Desktop Environment (DE):** The graphical user interface (menus, windows, panels) of the OS (*e.g.*, GNOME, KDE Plasma, XFCE).
