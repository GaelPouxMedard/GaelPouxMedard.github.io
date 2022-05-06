---
layout: post
type: communication
support: powerpoint
link: http://arxiv.org/abs/2201.12568
title: Le Processus Powered Dirichlet-Hawkes comme A Priori Flexible pour Clustering Temporel de Textes
authors: <b>G. Poux-Médard</b>
journal: Revue des Nouvelles Technologies de l'Information - p.323-330
year: 2022
doi: 10.48550/arXiv.2201.12568
date: 2022-01-08
description: # Add post description (optional)
img: articles/covers/17-PDHP-EGC-prez.jpeg
fig-caption: 
tags: [clustering, temporal bayesian prior, powered dirichlet process, hawkes process, dirichlet-hawkes process, PDP, dirichlet]
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
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/img/articles/PDHP/Slides-EGC2022.pdf">Download PDF</a>.</p>
</object>