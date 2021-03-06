exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-owl-carousel/,
            use: loaders.null(),
          },
          {
            test: /typed.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
