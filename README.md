# react-waterfall-layout
light sample

## Getting Started
`npm i react-water-layout`

##Demo
`git clone https://github.com/leeleoo/react-waterfall-layout.git`

and npm install in react-waterfall-layout

then run npm start and visit localhost:3344

## Usage
|props|type|description|
|---|------|------|
|`data`|array|the waterfall data|
|`renderItem`|fuc(dataItem,itemIndex):component |Takes a data entry from the data source and its ids and should return a renderable component to be rendered as the item|
|`itemWith`|number (default 200)| the width of each waterfall item|

you code would like this
```
  <WaterFall
      data={[{title:'title1',content:'content1'},{title:'title1',content:'content2,content2,content2'}]}
      renderItem={({title,content},index)=>{
           return <div>{title}{content}</div>
      }}
      style={{display:'flex'}}
      className="blah"
  />
```


##last
    if you will overwrite the default style ,  I  would give you best wishes;
    the default style of waterfall container:
    { 
        display: 'flex', 
        justifyContent: 'space-around', 
        overflow: 'auto', 
        alignItems: 'flex-start' 
    }





