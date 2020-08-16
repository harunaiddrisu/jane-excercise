
# Jane react native exercise

## Start up

Generate a github access token for your account.
https://github.com/settings/tokens

Replace `<token>` with your token in the `.env` file.

```
yarn
yarn start;
```


## Excercise

* Search github repositories via graphql (example query is attached in homescreen component). (Searchbox is not in the wireframe)
* Group all the starred repositories together but hide them behind a button "Starred repositories".
* Group all the unstarred repositories together.
* Show count of the unstarred repositories next to the "My starred repositories" header (not in wireframe)
* Show count of the starred repositories next to the "My starred repositories" header (not in wireframe)
* When the button is pressed the unstarred repositories will scroll all the way up and the list of starred repositories is shown.
* Make the list item swipable, when clicked the item will become starred or unstarred and will be added to the correct list.
* Give all the components a nice finishing touch (the graphql exposes more properties then listed, in the wireframe only the title is shown but feel free)

### Nice to have

* Paginate both lists


![Wireframe](https://github.com/daubechies/charlin-native-excercise/blob/master/docs/iphone.png?raw=true)



**Good luck!**
