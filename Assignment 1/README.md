# dat405
Project Description:

Based on the work that we've been doing in class, I used a variety of techniques
to create my project.

The project itself works by first moving the mouse to the top left of the canvas
starting on 1 tile. As you move the mouse down to the bottom left, the Y axis
increases up to 10 squares generating 10 rows of individual squares, if you move
the mouse to the top right, the X axis will increase up to 25 generating 25
columns of squares. Finally, if you move the mouse from the top right to the
bottom right there will be a total of 250 squares on the screen. You can also
press the numbers between 1 & 6 to change to random HSB colours

I used the random() function to generate different colours based on the HSB
(Hue, Saturation, Brightness) colour model.

I used the keyPressed() function to choose a random colour based on the number
key that's been selected.

I used the map() function so that whenever you move the mouse the number of tiles
in the X and Y axis increase or decrease.
