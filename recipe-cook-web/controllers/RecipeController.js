import prisma from '../prisma/prisma.js';

export const saveCustom = async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const user = req.auth_user;

  if (!title || !ingredients) {
    return res.status(400).json({
      status: 'error',
      message: 'Title and ingredients are required.'
    });
  }

  try {
    const recipe = await prisma.recipes.create({
      data: {
        user_id: user,
        title,
        ingredients,
        instructions: instructions || null,
      }
    });

    res.status(201).json({
      status: 'success',
      message: 'Recipe saved',
      id: recipe.id
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to save recipe'
    });
  }
};

export const myRecipes = async (req, res) => {
  const user = req.auth_user;

  try {
    const recipes = await prisma.recipes.findMany({
      where: {
        user_id: user,
      }
    });

    res.json({
      status: 'success',
      message: 'Recipes fetched',
      recipes: recipes
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch recipes'
    });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { title, ingredients, instructions } = req.body;
  const user = req.auth_user;

  try {
    const recipe = await prisma.recipes.findFirst({
      where: {
        id: Number(id),
        user_id: user
      }
    });

    if (!recipe) {
      return res.status(404).json({
        status: 'error',
        message: 'Recipe not found'
      });
    }

    const updated = await prisma.recipes.update({
      where: { id: Number(id) },
      data: {
        title: title ?? recipe.title,
        ingredients: ingredients ?? recipe.ingredients,
        instructions: instructions ?? recipe.instructions
      }
    });

    res.json({
      status: 'success',
      message: 'Recipe updated',
      id: updated.id
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to update recipe'
    });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;
  const user = req.auth_user;

  try {
    const recipe = await prisma.recipes.findFirst({
      where: {
        id: Number(id),
        user_id: user
      }
    });

    if (!recipe) {
      return res.status(404).json({
        status: 'error',
        message: 'Recipe not found'
      });
    }

    await prisma.recipes.delete({
      where: { id: Number(id) }
    });

    res.json({
      status: 'success',
      message: 'Recipe deleted'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete recipe'
    });
  }
};
