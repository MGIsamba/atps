import { Text } from 'react-native';
import React, { Component } from 'react';
import {dnews, news, tdetail,recipes, categories, trainers, ingredients } from './dataArrays';


export function getNews(newId) {
  const newsArray = [];
  dnews.map(data => {
    if (data.newId == newId) {
      newsArray.push(data);
    }
  });
  return  newsArray;
}
export function getNewsName(newId) {
  let name;
  news.map(data => {
    if (data.id == newId) {
      name = data.name;
    }
  });
  return name;
}



export function getTrainersById(trainerId) {
  let trainer;
  trainers.map(data => {
    if (data.id == trainerId) {
      trainer = data;
    }
  });
  return trainer;
}
export function getTrainersName(trainerId) {
  let name;
  trainers.map(data => {
    if (data.id == trainerId) {
      name = data.name;
    }
  });
  return name;
}
export function getTrainers(trainerId) {
  const trainersArray = [];
  tdetail.map(data => {
    if (data.trainerId == trainerId) {
      trainersArray.push(data);
    }
  });
  return  trainersArray;
}

export function getNumberOfTrainers(trainerId) {
  let count = 0;
  tdetail.map(data => {
    if (data. trainerId ==  trainerId) {
      count++;
    }
  });
  return count;
}




export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId) {
  const recipesArray = [];
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
