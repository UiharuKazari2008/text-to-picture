
const text = 'Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis neque, ultricies luctus eleifend condimentum cursus commodo diam mus fringilla fusce, scelerisque hac pellentesque posuere turpis lacinia natoque nec. Eleifend scelerisque dignissim interdum blandit inceptos volutpat, ultricies facilisis per sollicitudin pellentesque mus suspendisse, sociis vehicula semper est eu. Natoque curae torquent fringilla nostra sem quis taciti imperdiet, neque venenatis magna morbi aenean porttitor suscipit est faucibus, eros cursus ut nullam eleifend nisl erat. Ad curabitur dignissim commodo egestas luctus magnis dis, turpis a nec duis torquent aptent aliquet natoque, feugiat placerat nisi augue sodales ante. Nisi tempus nascetur pretium semper aenean luctus ligula lacinia vivamus aliquet ante, senectus commodo morbi lacus pharetra tellus at velit class sed orci, potenti enim penatibus dictum congue duis ac vestibulum mollis habitant. Congue scelerisque euismod luctus egestas netus massa cum imperdiet, quis ad fames dictumst leo dui praesent odio viverra, vel ridiculus nec habitant suspendisse dictum porta. Sociis nullam morbi euismod semper etiam vulputate neque convallis vitae, arcu commodo viverra ad nisl placerat velit curabitur leo tempus, habitant pellentesque auctor vehicula penatibus ante cursus eget. Condimentum mattis est eget sociis curabitur lacinia a fringilla maecenas, nibh hac potenti dui pellentesque tortor dis parturient class at, tellus phasellus penatibus congue feugiat vel venenatis tempor. Faucibus aptent libero habitant nec suscipit arcu sed class luctus felis est, sociis gravida facilisis viverra quam rhoncus curae diam platea feugiat himenaeos, in euismod lacus parturient consequat condimentum cubilia venenatis nibh purus. Sem hendrerit quisque fusce ridiculus inceptos mattis curabitur pellentesque, mus sagittis nunc ligula sed eleifend mi, velit phasellus per non faucibus parturient luctus. Dapibus fringilla accumsan class etiam faucibus suscipit dictu.'
const body = text.substring(0,400)



require('./index').convert({
    text: body,
    source: "./tweet-bg.png",
    color: 'white',

}).then(result => {
    return result.getBase64()
}).then(str => {
    var base64Data = str.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
        console.log(err);
    });
})
