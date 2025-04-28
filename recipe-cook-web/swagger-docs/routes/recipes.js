/**
 * @swagger
 * /recipes/custom:
 *   post:
 *     summary: Create a new custom recipe
 *     tags: [Recipes]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - ingredients
 *             properties:
 *               title:
 *                 type: string
 *                 example: Chicken Parmesan
 *               ingredients:
 *                 type: string
 *                 example: Chicken breast, breadcrumbs, tomato sauce, mozzarella cheese
 *               instructions:
 *                 type: string
 *                 example: Bread chicken, fry, top with sauce and cheese, bake until done.
 *     responses:
 *       201:
 *         description: Recipe created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Recipe saved
 *                 id:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 * 
 *   get:
 *     summary: Get all recipes for authenticated user
 *     tags: [Recipes]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: List of recipes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Recipes fetched
 *                 recipes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Recipe'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 * 
 * /recipes/custom/{id}:
 *   put:
 *     summary: Update a recipe
 *     tags: [Recipes]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Recipe ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               ingredients:
 *                 type: string
 *               instructions:
 *                 type: string
 *     responses:
 *       200:
 *         description: Recipe updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Recipe updated
 *                 id:
 *                   type: integer
 *                   example: 1
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Recipe not found
 *       500:
 *         description: Server error
 * 
 *   delete:
 *     summary: Delete a recipe
 *     tags: [Recipes]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Recipe ID
 *     responses:
 *       200:
 *         description: Recipe deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Recipe deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Recipe not found
 *       500:
 *         description: Server error
 */ 