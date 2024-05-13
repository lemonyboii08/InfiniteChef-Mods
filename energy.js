addIngredient("energy",{
    type:"powder",
    group:"generic",
    color:"#6efdff",
    glow:"#6efdff",
    adj:"energized",
    shape:"atom",
    placedShape:"powder",
    hidden:"true",
    dissolve:"true",
});

addIngredient("energized_gas",{
    type:"gas",
    color:"#6efdff",
    glow:"#6efdff",
    adj:"energized",
    hidden:"true",
});

addIngredient("energized_liquid",{
    type:"liquid",
    color:"#6efdff",
    glow:"#6efdff",
    adj:"energized",
    hidden:"true",
});

addIngredient("energized_powder",{
    type:"powder",
    color:"#6efdff",
    glow:"#6efdff",
    adj:"energized",
    hidden:"true",
    dissolve:"true",
});

editIngredient("gas",{
    reactions: {
        energy: { set1:"energized_gas" },
    }
});

editIngredient("powder",{
    reactions: {
        energy: { set1:"energized_powder" },
    }
});

editIngredient("liquid",{
    reactions: {
        energy: { set1:"energized_liquid" },
    }
});
