---
layout: home
title: Tichu Statistik
---


Willkommen zu meiner statistischen Analyse des Kartenspiels Tichu. In dieser Blogreihe untersuche ich verschiedene Aspekte des Spiels aus statistischer Sicht, basierend auf einem umfangreichen Datensatz von über 21 Millionen Runden.

## Die Analyse-Reihe

{% for post in site.posts reversed %}
- {{ post.date | date: "%Y-%m-%d" }} - [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

## Über die Daten

Die Analysen basieren auf zwei Datensätzen:
- **BSW Datensatz**: ~21 Millionen Runden von BrettSpielWelt
- **Gefilterter BSW Datensatz**: ~400.000 Runden von erfahrenen Spielern (>100 Spiele, ≥55% Winrate)

## Methodik

Die Analysen kombinieren:
- Theoretische Wahrscheinlichkeitsberechnungen
- Empirische Auswertungen der Datensätze
- Praktische Strategieempfehlungen

*Letzte Aktualisierung: {{ site.time | date: "%Y-%m-%d" }}*