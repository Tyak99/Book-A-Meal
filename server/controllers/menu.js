import Model from '../models';

const { Menu } = Model;

exports.test = ('/', (req, res) => {
  res.send('controllll');
});
