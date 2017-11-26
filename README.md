# Social media share buttons

[![Build Status](https://travis-ci.org/tfiechowski/react-social-share-buttons.svg?branch=master)](https://travis-ci.org/tfiechowski/react-social-share-buttons)

This library contains lightweight social media share buttons as React
components.

Usage:

```jsx
import ShareButton from 'react-social-share-buttons'

function SomeComponent({}) {
    return (
        <div>
            Hey, share me!
            <ShareButton
                compact
                socialMedia={'facebook'}
                url={"https://xkcd.com/1024/"}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text="Sit by a lake"
            />
        </div>
    );
}
```

Available social media types: `facebook`, `google-plus`, `twitter`, `pinterest`.

TODO: Describe props, improve readme further
