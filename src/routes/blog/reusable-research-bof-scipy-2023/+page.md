---
title: "Reusable research Birds of a Feather session at Scipy 2023: Goals and challenges"
author: camgerlach
pub_date: 2023-12-19
category: News
tags: community, outreach, media, team
summary: The Spyder team and collaborators hosted a Birds of a Feather session at SciPy 2023, focused on moving beyond just scripts and notebooks toward truly reproducible, reusable research. Here’s a recap of the goals of the session and the shared challenges that participants brought up in achieving them.
---

The Spyder team and [collaborators](https://cfp.scipy.org/2023/speaker/SE7SNC/) hosted [a Birds of a Feather (BoF) session](https://cfp.scipy.org/2023/talk/LGZUNG/) at [SciPy 2023](https://www.scipy2023.scipy.org/), focused on moving beyond just scripts and notebooks toward truly reproducible, reusable research.
Here, we’ll recap the motivation and goals of the BoF and share the common challenges that participants brought up with notebooks and moving toward reproducible, reusable research.
In [our next post](https://www.spyder-ide.org/blog/reusable-research-bof-scipy-2023-part-2/), we’ll follow up with some of the tips, tools, platforms and strategies attendees brought up as ways to address them, including using Spyder!
We'd like to thank [Juanita Gomez](https://cfp.scipy.org/2023/speaker/SE7SNC/) for helping organize the BoF, Hari for his hard work compiling a summary of the outcomes, and everyone for attending and sharing such great ideas and insights!


## The trouble with notebooks

The overwhelming majority of current scientific code is siloed away into one-off scripts and notebooks, where the only real mechanism for reusing and building upon them is good old copy and paste.
In order to keep "building upon the shoulders of giants", we need to achieve not only reproducibility of individual results but also true reusability of research methods, that can be shared, built upon, and deployed by researchers across the world.

In particular, scripts and notebooks are not typically very reproducible or reusable, as users generally cannot easily import them, specify dependencies, extend them or use them for another project (without copy/paste and managing multiple code versions by hand). Additionally, for notebooks specifically, authors and readers alike cannot easily track them in Git (with clean diffs), lint, type check, test or format them with standard Python tools, or interoperate with most other non-notebook-specific ecosystems.

To address these pressing issues, the Spyder team and interested community members convened a Birds of a Feather (BoF) session, ["Beyond Notebooks: From reproducible to reusable research"](https://cfp.scipy.org/2023/talk/LGZUNG/), at the [SciPy 2023 conference in Austin, TX](https://www.scipy2023.scipy.org/), where we invited attendees to share their tools and workflows for reusable science, and explored how we can encourage users to expand beyond the current notebook-centric monoculture and toward more holistic, modular and interoperable approaches to conducting research and developing scientific code.
The goal was to not only share and discuss ideas and insights on the topic among BoF participants, which numbered over ≈50 interested community members, but also to help inform future guides and resources on this topic, to be hosted on central platforms like the Scientific Python organization, as is currently in progress.


## Goals and themes

The BoF was motivated by the following key questions:

* What is reusable research and why is it important?
* What tools and techniques do people have to share for effective reusable research?
* How can we integrate reusable research into existing workflows?
* How do we teach students and researchers about reusable research, and encourage them to practice it?

While the resulting community ideas and insights centered around three related themes:

* How can we make existing notebooks more readable, reproducible and reusable?
* How can notebooks be progressively migrated to Python modules for basic reusability?
* How can the community simplify and advocate the process of creating fully reusable Python packages?


## Common challenges

Participants commented that students mostly get introduced to notebooks through classes in contexts that are very different from how they would use them for their research, and they don't have a good resource for that to hand to them if they have a question or are confused about that.
Others responded that they think that should be part of the curriculum, questioning why are people learning machine learning using Jupyter notebooks without actually learning how to use Jupyter notebooks themselves, and that many folks don't come from a traditional computer science background and may not know about all these tools.

It was also remarked that some feel the fact that students are only exposed to notebooks really makes them not necessarily want to reach for other tools even when they would be more appropriate down the line, which participants suggested addressing by encouraging students to use IDEs like [Spyder](https://www.spyder-ide.org/) and [JupyterLab](https://jupyterlab.readthedocs.io/) that offer many features for reusability and reproducibility, but while also allowing them to take advantage of notebooks.

In particular, one former Spyder developer commented that they feel that we should show students how to use tools like debugging and make it easier for them to do that, but give them the choice whether they want to use those tools, and that the right approach is not necessarily telling them what tool to use, but having documentation and exposure to those tools so students can pick the best option for them.
Others remarked in response that we do want to give students options, though many might not need a full debugger.

One library worker mentioned that they often only have an hour to introduce users to Python, and use [Google Collab notebooks](https://colab.google/) because it makes it a lot easier for students to get started with Python over having to download and install an IDE, but then students tend to be familiar with that tool and continue to use it.
Another participant mentioned they are a big fan of using videos to help reach students over reading the documentation, as they feel students are much more likely to watch them.

The discussion shifted to tools in larger organizations, with a participant commenting "It's one thing when it's students, but how do you do that when it's your whole organizational culture that needs to change?" One participant responded saying she's a student herself, and no one ever really talked to her about IDEs and explained what they were and why you'd want to use one, remarking that it's important for teachers to actually train them to use the proper tools, but they have no idea when it comes to coworkers using these things.

Another participant suggested "nerd sniping" as an effective way to handle that in larger organizations, which involves figuring out what is the biggest pain point for the team, usually something that should be automated, and then getting them to follow better practices by showing them how these tools can fix that problem.
Others agreed that it's really about awareness, and if you show someone a cool tool most people will make the decision to adopt them on their own, but there will always be some who might not want that.

Finally, it was brought up that students might have familiarity with Python or R, but Git is a completely different animal and is quite challenging to factor that into education; people like writers would really benefit from Git but it’s really hard to get them to use it, and people might not be aware of how inefficient the workflows they use are, because that's all they know.


## Next up

Now that we’ve surfaced the reproducibility and reusability challenges that participants brought up at the BoF, check out our [next blog post](https://www.spyder-ide.org/blog/reusable-research-bof-scipy-2023/), where we share all the helpful tips, cool tools, awesome platforms and useful strategies attendees suggested to help address them.
Until then, happy Spydering!
