---
layout: post
title: "Tichu & Statistik Pt.2.2: Große Tichus bei Rückstand in der letzten Runde"
date: 2024-12-31
categories: tichu analysis
description: "Spielverhalten bezüglich Großen Tichus"
---

*Vorheriger Post: [Tichu & Statistik Pt.2: Große Tichus und erwarteter Punktegewinn]({% post_url 2024-12-30-tichu-gt %})*

Wir benutzen in diesem Post die selben 80 Handkategorien wie im Vorherigen.

In der letzten Runde eines Tichuspiels ist das Spiel, dass den erwarteten Punktegewinn maximiert, oft irrelevant. Zum Beispiel macht es bei einem Vorsprung von 405 Punkten wenig Sinn, auch die stärksten ersten 8 mit einem GT anzusagen: Tut man dies nicht, und der Teammate auch nicht, liegt die Siegchance bei 100%. Sagt man stattdessen an, öffnet man die Tür für ein Kontertichu mit Doppelsieg und damit der Niederlage.

Stattdessen stellt sich viel mehr die Frage, bei gegebener Kategorie $k \in \text{Kategorie}$  unter den ersten 8 und gegebener Punktedifferenz $p$ zum Gegner, ob 

$$\begin{eqnarray} 
 \text{Pr}( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) &>     \nonumber \\
 \text{Pr}( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) & \nonumber 
\end{eqnarray}$$

Wie im letzten Post benutzen wir einige leichte Umformungen, um diese Wahrscheinlichkeiten gut schätzen zu können.
Zunächst nehmen wir vereinfachend an, dass bei Gleichstand in der letzten Runde eine weitere Runde gespielt wird,
und das die Siegchancen in dieser Runde bei 50% liegen. Dann gilt jeweils

$$\begin{eqnarray} 
 \text{Pr}( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) &=     \nonumber \\
 \text{Pr}( \text{relativer Rundengewinn} > -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) & + \nonumber \\
 0.5 \cdot \text{Pr}( \text{relativer Rundengewinn} = -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} )
\end{eqnarray}$$
, sowie 

$$\begin{eqnarray} 
 \text{Pr}( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) &=     \nonumber \\
 \text{Pr}( \text{relativer Rundengewinn} > -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} ) + & \nonumber \\
 0.5 \cdot \text{Pr}( \text{relativer Rundengewinn} > -p | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{Keine GT Ansage} )
\end{eqnarray}$$

Wir gehen vereinfachend davon aus, dass die Punktedifferenz zum Gegner keinen Einfluss auf das Ergebnis der Runde hat (da es nicht Teil der elementaren Spielmechanik ist).
> Das ist natürlich nicht ganz richtig. Die Punktedifferenz hat z.B. Einfluss auf die Psyche aller Spieler und verändert dementsprechend auch die Spielweise.

Dann erhalten wir

$$\begin{eqnarray} 
 \text{Pr}( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) &=     \\
 \text{Pr} ( \text{relativer Rundengewinn} > -p | k \text{ unter den ersten 8}, \text{GT Ansage} ) & + \\
  0.5 \cdot \text{Pr}( \text{relativer Rundengewinn} = -p | k \text{ unter den ersten 8}, \text{GT Ansage} )
\end{eqnarray}$$

und gleiches Ergebnis für den Fall "keine GT Ansage".

Wie im letzten Kapitel benutzen wir die theoretischen Übergangswahrscheinlichkeiten zu den Kategorien innerhalb der ersten 14 Karten, um die Wahrscheinlichkeiten genauer zu schätzen und die Vernachlässigung der Beikarten etwas auszugleichen:

$$\begin{eqnarray} 
 \text{Pr} ( \text{relativer Rundengewinn} > -p | k \text{ unter den ersten 8}, \text{GT Ansage} ) & = \\
 \sum_{k' \in \text{Kategorie} } \text{Pr} (\text{relativer Rundengewinn} > -p | k' \text{ unter den ersten 14}, \text{GT Ansage}) \cdot Pr(k' \text{ unter den ersten 14} | k \text{ unter den ersten 8}) & \nonumber
\end{eqnarray}
$$

Ein analoges Ergebnis gilt für den Fall $\text{relativer Rundengewinn} = -p$ sowie für den Fall "keine GT Ansage".

Letztlich tauschen wir also die Erwartungswerte aus dem letzten Post mit errechneten Wahrscheinlichkeiten aus - das funktioniert aber nur bei fixer Punktedifferenz $p$ und weil wir uns in der letzten Runde befinden.
Wie im letzten Kapitel werden geschätzte Wahrscheinlichkeiten nur bei 300 oder mehr Vorkomnissen berichtet unten ansonsten durch das Maximum der Wahrscheinlichkeiten solcher Kategorien ersetzt, die in der gegebenen Kategorie enthalten sind. 
> Für eine formale Deifnition von Kategorie k' ist in k enthalten, gerne in den letzten Post schauen.

Wie im letzten Post berichten wir zunächst, für jede der 80 Kategorien die vier Werte 
1. $$ \text{Pr} (\text{relativer Rundengewinn} > -p | k' \text{ unter den ersten 14}, \text{GT Ansage}) $$ 
2. $$ \text{Pr} (\text{relativer Rundengewinn} = -p | k' \text{ unter den ersten 14}, \text{GT Ansage}) $$
3. $$ \text{Pr} (\text{relativer Rundengewinn} > -p | k' \text{ unter den ersten 14}, \text{keine GT Ansage}) $$ 
4. $$ \text{Pr} (\text{relativer Rundengewinn} = -p | k' \text{ unter den ersten 14}, \text{keine GT Ansage}) $$ 

Hierbei gibt es eine Tabelle für jeden möglichen Wert von $$p \in \{ -400, -395, -390, \ldots, 50 \} $$. 
Für $p > 50$ sollte man in keinem Falle ein großes Tichu ansagen - ein kleines genügt. Die Tabellen findest du [hier]({{ site.baseurl }}/_pages/gt_table_probs_1). Korrigierte Werte sind wieder fett markiert.

Jetzt benutzen wir die oben ausgerechnte Äquivalenz, um 
$$ \text{Pr}( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{GT Ansage} ) $$
sowie 
$$ \text{Pr}( \text{Sieg} | k \text{ unter den ersten 8}, \text{Punktedifferenz zum Gegner } = p, \text{keine GT Ansage} ) $$
zu schätzen.

Wie oben gibt es eine Tabelle für jeden möglichen Wert von $$p \in \{ -400, -395, -390, \ldots, 50 \}$$, die du [hier]({{ site.baseurl }}/_pages/gt_table_probs_2) findest.

Bei einer Differenz von beispielsweise p=-305 macht es laut der Tabelle also Sinn, mit jeder Hand ein GT anzusagen. Man sollte darauf achten,
hier seinem Partner nicht zuvorzukommen, wenn man sehr schwache Kategorien hat. Hier kann es eine implizite Strategie sein, durch die Dauer des Wartens für die Ansage die Handgüte mit seinem Partner zu kommunizieren.

Für p=50 hat es mit fast keiner Hand einen Vorteil, ein GT anzusagen.

### Kritik

Die oben angesprochenen Wahrscheinlichkeiten wurden jeweils auf dem gesamten Datensatz ausgewertet und nicht nur in der letzten Runde von terminierten Spielen. Das kann die genannten Wahrscheinlichkeiten beeinflussen - gute Spieler können  in der letzten Runde eines Spiels nämlich ganz anders spielen, als sonst. Insgesamt sollten die Ergebnisse dieser Analyse also mit großer Vorsicht genossen werden.


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