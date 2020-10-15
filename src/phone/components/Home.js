/*

some notes on what this does

1. note that we have a thingmark with a specific name ('asa').  This matches the thingmark used in the main experience

2. then you first run this experience, we expect the user to look at (and acquire.track) the thingmark
there is a set size (to ensure correct placement and scale) and the thingmark is positioned relative to the object - in this case, the engine.
be sure to place the thingmark carefully.

3. when you scan/acquire the target, the digital engine SHOULD appear aligned with the physical. 
if not, say "hey view, update tracking" and re-acquire the thingmark.
you may need to do this a few times just to be sure you get the best alignment.

4. once happy (and walk around the engine a few times to ensure that there's a good alignment - it may not be perfect, but use your judgement)
then say "hey view save anchor".   You should receive a confirmation beep and a message that it has saved a Spatial Anchor.

see notes below, but if the anchor is incorrect, you shoudl remove it and run thorugh the process again.

(note: what we're doing here is placing a hololens native spatial anchor at the location/pose given to us by the thingmark)

4. you can exist this experience.

next, run the main experience.
if you look at that code, you will see that it also uses a tracker called 'asa'
what happens is that the hololens View will look to see if there is a saved anchor with the name of the target; it there is, it will use it
INSTEAD of the vuforia target.

this is hololens specific, and recommended for demonstration only.

Resetting the anchor
--------------------
if you find you need to reset things, clean up the device, you shoudl run this experience, and say
"hey view, remove anchor"
it will remove (in this case) the anchor called 'asa'
you can then set the anchors back up again.

obviously this same trick can be used for any model - it desnt have to be an engine!

*/