---
layout: post
type: communication
support: powerpoint
link: https://arxiv.org/pdf/2109.07170.pdf
title: PDHP - un Prior Temporel Flexible pour Clustering Textuel Difficile
authors: <b>G. Poux-Médard</b>
journal: EGC
year: 2022
doi: 
date: 2022-01-08
description: # Add post description (optional)
img: articles/covers/17-PDHP-EGC-prez.jpeg
fig-caption: L'apparition d'un document (news, tweet, article, etc.) est conditionnée non seulement par son contenu sémantique,
    mais également par sa date de publication (par rapport aux publications précédentes) dans une certaine mesure.
    En jouant sur un hyperparamètre r, il est possible de choisir sur quelle information se focaliser -- le texte ou le temps.
    Les documents sont ainsi regroupés en clusters en fonction de leur contenu ou de leur dynamique, ou
    d'une mixture des deux.
tags: [Clustering, Temporal Bayesian Prior, Powered Dirichlet Process, Hawkes Process, PDP, Dirichlet]
---

This work is a translation of the
<a href="{{ "/PDHP" | prepend: site.url }}">Powered Hawkes-Dirichlet Process article</a> (ICDM 2021)
for the EGC conference.

Le contenu textuel d’un document et sa date de publication sont corrélés. Par exemple,
une publication scientifique est influencée par les précédents articles cités dans
ladite publication. Utiliser cette corrélation permet d’améliorer la compréhension
de grands corpus textuel datés. Cependant, cette tâche peut se compliquer lorsque les
textes considérés sont courts ou possèdent des vocabulaires similaires. De plus, la
corrélation entre texte et date est rarement parfaite.

Nous développons une méthode répondant à ces limites, permettant de créer des
clusters de documents en fonction de leur contenu et de leur date : le processus
Powered Dirichlet-Hawkes (PDHP). Nous montrons que PDHP présente de meilleures
performances que les modèles état de l’art (qu’il généralise) lorsque l’information
textuelle ou temporelle est peu informative. Le PDHP se libère également de l’hypothèse
d’une corrélation parfaite entre texte et date des documents. Enfin, nous illustrons
une possible application sur des données réelles, provenant de Reddit.

## <center><u>Le poster</u></center>
![alt text](/assets/img/articles/PDHP/Poster.jpg)

<br><br>

## <center><u>Les slides</u></center>
<object data="/assets/img/articles/PDHP/Slides-EGC2022.pdf" type="application/pdf" width="100%" height="700px">
    <embed src="/assets/img/articles/PDHP/Slides-EGC2022.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="http://yoursite.com/the.pdf">Download PDF</a>.</p>
    </embed>
</object>