var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
  var regex;
  $scope.escapeRegExp = function(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  $scope.gridItems = [
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/QrXgXMhCSouyhU7idq7g_IMG_8402.jpg',
      headerText: 'Fireworks on the 4th',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus aliquam asperiores, cum distinctio aliquid recusandae velit beatae. Reprehenderit in eum, expedita, alias explicabo iure amet. Assumenda consequuntur vitae fugit.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/dandelion.jpg',
      headerText: 'Dandelion',
      blurbText: 'cliff Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae assumenda facilis qui minus, consequuntur reiciendis atque fugiat ullam id, placeat nam quas, voluptates ipsum velit voluptatum culpa numquam saepe quos!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/C3EWdWzT8imxs0fKeKoC_blackforrest.jpg',
      headerText: 'Cabin in the Woods',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vero cum vitae laboriosam nemo quaerat, sapiente harum reiciendis voluptas itaque incidunt molestias, fugiat asperiores dolores officiis architecto nihil assumenda. Fugiat!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplash_522b9cc0386f1_1.jpg',
      headerText: 'Lazy Sunday',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ex minima, fugiat itaque error voluptates inventore sunt sequi possimus tempore odit debitis sint. Repudiandae quia esse totam eum blanditiis sunt?'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/MIbCzcvxQdahamZSNQ26_12082014-IMG_3526.jpg',
      headerText: 'Yogi',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nisi magnam cum nam iusto fugiat suscipit tempora nostrum autem, quasi, nemo illo sunt vitae id consectetur. Culpa reprehenderit esse sapiente?'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/cA4aKEIPQrerBnp1yGHv_IMG_9534-3-2.jpg',
      headerText: 'Antique Typewriter',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, blanditiis autem, ex quidem hic unde dolorum deleniti tenetur repellat nesciunt delectus pariatur voluptate corrupti inventore iure, itaque, fuga natus doloribus.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1428604467652-115d9d71a7f1.jpeg',
      headerText: 'The Sun is Setting',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque et amet aspernatur ullam, accusamus cum. Minima obcaecati voluptate velit cupiditate error ut, suscipit saepe beatae eaque veniam. Maiores, reiciendis quo.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1422640805998-18a4dd89bec2.jpeg',
      headerText: 'Staring at the Stars',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus recusandae deleniti nobis unde dolor minus ut corporis saepe tempora architecto, possimus! Obcaecati odit nam vero ipsum odio vel iste.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-IPEivX6xSBaiYOukY88V_DSC06462_tonemapped.jpg',
      headerText: 'On the Road Again',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, laboriosam impedit expedita alias quod repellendus reiciendis, officiis ullam iste delectus perferendis odio officia, commodi nihil voluptas aliquam. Enim, minus, unde!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1428591501234-1ffcb0d6871f.jpeg',
      headerText: 'Just Me, Myself, and I',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quidem alias libero vel sunt quod non, aspernatur rerum nisi porro corrupti minus unde hic nemo labore veniam! Ipsa, nam, quas!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1427348693976-99e4aca06bb9.jpeg',
      headerText: 'Early Morning Hike',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, sequi, cumque temporibus, mollitia obcaecati earum provident labore adipisci repellendus fugiat repellat quas doloribus incidunt ipsum. Tempore delectus quas illum ex!'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1414912925664-0c502cc25dde.jpeg',
      headerText: 'Getting Away for the Weekend',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptate nam provident, nulla recusandae maxime fugit praesentium blanditiis sunt, veniam quasi, mollitia possimus consequuntur nemo qui repellat adipisci accusamus ullam.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1428342319217-5fdaf6d7898e.jpeg',
      headerText: 'The Bridge',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus recusandae deleniti nobis unde dolor minus ut corporis saepe tempora architecto, possimus! Obcaecati odit nam vero ipsum odio vel iste.'
    },
    {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/unsplashed2-photo-1423483641154-5411ec9c0ddf.jpeg',
      headerText: 'Visit to the Vineyard',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus recusandae deleniti nobis unde dolor minus ut corporis saepe tempora architecto, possimus! Obcaecati odit nam vero ipsum odio vel iste.'
    }
  ];
  $scope.search = '';
  $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
  });
  $scope.filterBySearch = function(gridItem) {
      if (!$scope.search) return true;
      return regex.test(gridItem.headerText + " " + gridItem.blurbText);
  };
  $scope.toggleBlurb = function($event) {
    console.log($event);
  };
});