import '../css/Categories.css';

function Categories(){

    const categories =[{
        categoryName : "Phones",
        categoryImage: "https://thumbs.dreamstime.com/b/apple-computer-logo-16497803.jpg"
        },
        {
            categoryName : "Groceries",
            categoryImage: "https://www.rd.com/wp-content/uploads/2019/08/fresh-fruit-scaled.jpg?resize=768,686"
        },
        {
            categoryName : "Consoles",
            categoryImage: "https://10beasts.com/images/Consoles-Gamepads-Illustration.png"
        }
    ]
    
    const displayAlert = (category) =>
    {
        var alertMessage = "clicked on "+category.categoryName;
        alert(alertMessage);
    }
    return(
    <div className="categoriesContainer">
        {categories && categories.map((category,index) => (
            <div key={Math.random()} className='categoryItem' onClick={()=> displayAlert(category)}>
            <img key={Math.random()} src={category.categoryImage} alt=""></img>
            <p key={Math.random()}> {category.categoryName}</p>
        </div>
        )
        )}
    </div>
    )
}

export default Categories;