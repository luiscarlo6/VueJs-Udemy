new Vue({
	el: '#exercise',
    data: {
        name: 'Luiscarlo',
        age: 30,
        image: 'https://lh3.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w2247-h1264-rw'
    },
    methods : {
        random: function() {
            return Math.random();
        }
    }
});