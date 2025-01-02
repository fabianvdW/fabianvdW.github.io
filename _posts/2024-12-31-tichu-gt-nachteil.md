---
layout: post
title: "Tichu & Statistik Pt.2.2: Große Tichus bei Rückstand (T-1, T-2 Runden)"
date: 2024-12-31
categories: tichu analysis
description: "Spielverhalten bezüglich Großen Tichus"
---

*Vorheriger Post: [Tichu & Statistik Pt.2: Große Tichus und erwarteter Punktegewinn]({% post_url 2024-12-30-tichu-gt %})*

Wir benutzen in diesem Post die selben 80 Handkategorien wie im Vorherigen.

In der letzten Runde eines Tichuspiels ist das Spiel, dass den erwarteten Punktegewinn maximiert, oft irrelevant. Zum Beispeil macht es bei einem Vorsprung von 405 Punkten wenig Sinn, auch die stärksten ersten 8 mit einem GT anzusagen: Tut man dies nicht, und der Teammate auch nicht, liegt die Siegchance bei 100%. Sagt man stattdessen an, öffnet man die Tür für ein Kontertichu mit Doppelsieg und damit der Niederlage.

Stattdessen stellt sich viel mehr die Frage bei gegebener Kategorie $k \in \text{Kategorie}$  unter den ersten 8 und gegebener Punktedifferenz $p$ zum Gegner, ob 

$$\begin{eqnarray} 
 Pr( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) &>     \nonumber \\
 Pr( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) & \nonumber 
\end{eqnarray}$$

Tatsächlich haben wir bei gegebener fixer Punktedifferenz $p$ bereits im letzten Post alle Vorbereitungen getroffen, die es benötigt um beide Wahrscheinlichkeiten auszurechnen:
Es gilt jeweils

$$\begin{eqnarray} 
 Pr( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) &=     \nonumber \\
 Pr( \text{relativer Rundengewinn} \ge -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) & \nonumber 
\end{eqnarray}$$
, sowie 

$$\begin{eqnarray} 
 Pr( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) &=     \nonumber \\
 Pr( \text{relativer Rundengewinn} \ge -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) & \nonumber 
\end{eqnarray}$$

Wir gehen vereinfachend davon aus, dass die Punktedifferenz zum Gegner keinen Einfluss auf das Ergebnis der Runde hat (da es nicht Teil der elementaren Spielmechanik ist).
> Das ist natürlich nicht ganz richtig. Die Punktedifferenz hat z.B. Einfluss auf die Psyche aller Spieler und verändert dementsprechend auch die Spielweise.

Dann erhalten wir

$$\begin{eqnarray} 
 Pr( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) &=     \\
 Pr( \text{relativer Rundengewinn} \ge -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) &=  \\
 Pr( \text{relativer Rundengewinn} \ge -p | k \text{ unter den ersten 8}, \text{GT Ansage} ) & 
\end{eqnarray}$$
, was wir bei gegebenen $p$ sowie $k$ auf dem Datensatz einfach ausrechnen können.


Wie im letzten Kapitel benutzen wir die theoretischen Übergangswahrscheinlichkeiten zu den Kategorien innerhalb der ersten 14 Karten, um die zweite Wahrscheinlichkeit auszurechnen:

$$\begin{eqnarray} 
 Pr( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) &=     \nonumber \\
 Pr( \text{relativer Rundengewinn} \ge -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) &= \nonumber \\
 Pr( \text{relativer Rundengewinn} \ge -p | k \text{ unter den ersten 8}, \text{Keine GT Ansage} ) &= \nonumber  \\
 \sum_{k' \in \text{Kategorie} }Pr(\text{relativer Rundengewinn} \ge -p | k' \text{ unter den ersten 14}, \text{Keine GT Ansage}) \cdot Pr(k' \text{ unter den ersten 14} | k \text{ unter den ersten 8}) & \nonumber
\end{eqnarray}.$$

Letztlich tauschen wir also die Erwartungswerte aus dem letzten Kapitel mit errechneten Wahrscheinlichkeiten aus - das funktioniert aber nur bei fixer Punktedifferenz $p$ und weil wir uns in der letzten Runde befinden.
Wie im letzten Kapitel werden geschätzte Wahrscheinlichkeiten nur bei 300 oder mehr Vorkomnissen berichtet unten ansonsten durch das Maximum aller 


---
*Nächster Post: [Tichu & Statistik Pt.3: Riskantes Spielen mit Straßen: Fallbeispiele]({% post_url 2025-01-01-tichu-strassen-beispiele %})*

<script type="text/javascript">
  window.MathJax = {
    tex: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true
    }
  };
</script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>