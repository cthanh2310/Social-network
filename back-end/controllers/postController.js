const Post = require('../models/Post');

// get all post
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate('author', 'name');
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.json(err);
  }
};

// create one post
exports.createOnePost = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const post = await Post.create({ ...req.body, author: userId });

    res.status(200).json({
      status: 'success',
      data: {
        post,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.updateOnePost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const post = await Post.findByIdAndUpdate(
      postId,
      { ...req.body },
      { new: true, runValidators: true } // response new post instead old post
    );

    res.status(200).json({
      status: 'success',
      data: { post },
    });
  } catch (err) {
    next(err);
    // receive error in errorHandler
  }
};
exports.deleteOnePost = async (req, res, next) => {
  try {
    console.log('params' + req.params);

    const { postId } = req.params;

    await Post.findByIdAndDelete(
      postId,
      { new: true, runValidator: true } // response new post instead old post
    );

    res.status(200).json({
      status: 'success',
      data: 'Post has been deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
