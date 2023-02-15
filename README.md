# use-load-image

A custom hook you can use to understand is a list of image are loaded in a page or not

There are some cases that you want not to let user see pictures loading or block some actions during loading a picture or list of picture. this Hook was
made on top of useEffect and lets you do any action you want during loading process or start any action after the loading was finished.

You sould use this pattern:

```
useLoadImage(()=>{},imagelist,length
   ,[dpendencies]);
```

function will call when all pictures was sucsessfuly loaded, it means even one of pictures fails functions won't run

Image list is an array that contains your pictures

Length is length of picture lists and it let you controll after loading howmany photos you want to run your action.
