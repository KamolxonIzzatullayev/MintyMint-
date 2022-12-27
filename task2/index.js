const data = [
    {
        title: 'First article',
        firstParagraph: 'First paragraph of First article'
    },
    {
        title: 'Second article',
        firstParagraph: 'First paragraph of Second article',
        secondParagraph: 'Second paragraph of Second article'
    },
    {
        title: 'Third article',
        firstParagraph: 'First paragraph of Third article'
    },
]

data.forEach(element => {
    Object.keys(element).forEach(item => {
        console.log(element[item]);
    });
});