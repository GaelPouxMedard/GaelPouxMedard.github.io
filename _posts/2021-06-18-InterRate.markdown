---
layout: post
type: article
support: conference
link: https://arxiv.org/pdf/2104.13695
title: Information Interaction Profile of Choice Adoption
authors: <b>G. Poux-Médard</b>, J. Velcin, S. Loudcher
journal: ECML-PKDD'21
year: 2021
doi: 10.1007/978-3-030-86523-8_7
date: 2021-06-18
description:  # Add post description (optional)
img: articles/covers/3_InterRate.jpg # Add image post (optional)
fig-caption: Pieces of information one is exposed to interact together. Their combination influence a user in a different way than the sum of their
 parts. The time-distance separating two interacting pieces of information plays a role in the interaction strength. In this figure, 
 you see how strong the interaction is, that is how much it will affect a person's choice, with respect to time.
tags: [Information, interaction, Convex modeling, Dynamics, Human decision]
---

Interactions between pieces of information (_entities_) play a substantial 
role in the way an individual acts on them: adoption of a product, the spread of 
news, strategy choice, etc. However, the underlying interaction mechanisms are 
often unknown and have been little explored in the literature.
We introduce an efficient method to infer both the entities interaction network 
and its evolution according to the temporal distance separating interacting entities; 
together, they form the _interaction profile_. The interaction profile allows 
characterizing the mechanisms of the interaction processes.
We approach this problem _via_ a convex model based on recent advances in multi-kernel 
inference. We consider an ordered sequence of exposures to entities (URL, ads, situations) 
and the actions the user exerts on them (share, click, decision). We study how users 
exhibit different behaviors according to _combinations_ of exposures they have 
been exposed to. We show that the effect of a combination of exposures on a user is 
more than the sum of each exposure's independent effect--there is an interaction. We 
reduce this modeling to a non-parametric convex optimization problem that can be 
solved in parallel. Our method recovers state-of-the-art results on interaction processes on three 
real-world datasets and outperforms baselines in the inference of the underlying data 
generation mechanisms. Finally, we show that interaction profiles can be visualized 
intuitively, easing the interpretation of the model.