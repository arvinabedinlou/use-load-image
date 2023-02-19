# use-load-image

## Introduction

A custom hook you can use to understand is a list of image are loaded in a page or not.

#### When you van use

There are some cases that you want not to let user see pictures loading or block some actions during loading a picture or list of pictures. This Hook was
made on top of useEffect and lets you do any action you want during loading process or start any action after the loading was finished.

# Install

Install via **npm**

```shell
npm install use-load-image -S
```

Install via **yarn**

```shell
yarn add use-load-image
```

# Usage

You can use the following pattern:

#### React

```ts
import useLoadImage from 'use-load-image'
...

const ExampleComponent = () => {

const [showLoading, setShowLoading] = useState<boolean>(true);

  useLoadImage(
    () => {
      setShowLoading(false);
    },
    imagelist,length
    ,[dependencies]
  );

    return (
        <>
         // anything
        </>
    );
}

```

#### Arguments

1- The function will call when all pictures was successfully loaded, which means even one of the pictures fails functions won't run. Write any action you want to happen after all images loaded.

2- Image list is an array that contains your pictures.

3- Length is length of picture lists and it let you control after loading how many photos you want to run your action (it's optional).
