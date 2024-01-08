const _0x42f828 = _0x31c3;
(function (_0x2f9a0b, _0x4ad52f) {
  const _0x76ac2c = _0x31c3,
    _0x39fb29 = _0x2f9a0b();
  while (!![]) {
    try {
      const _0x82231d =
        parseInt(_0x76ac2c(0xfc)) / 0x1 +
        (parseInt(_0x76ac2c(0xdb)) / 0x2) * (-parseInt(_0x76ac2c(0xf7)) / 0x3) +
        -parseInt(_0x76ac2c(0xe2)) / 0x4 +
        (-parseInt(_0x76ac2c(0xe9)) / 0x5) *
          (-parseInt(_0x76ac2c(0xf6)) / 0x6) +
        (-parseInt(_0x76ac2c(0xff)) / 0x7) * (parseInt(_0x76ac2c(0xf4)) / 0x8) +
        (parseInt(_0x76ac2c(0xdf)) / 0x9) * (-parseInt(_0x76ac2c(0xfb)) / 0xa) +
        parseInt(_0x76ac2c(0xd9)) / 0xb;
      if (_0x82231d === _0x4ad52f) break;
      else _0x39fb29["push"](_0x39fb29["shift"]());
    } catch (_0x3376da) {
      _0x39fb29["push"](_0x39fb29["shift"]());
    }
  }
})(_0x5438, 0x8a311);
const searchInput = document["querySelector"](_0x42f828(0xd7));
searchInput["focus"]();
function _0x31c3(_0x20bc65, _0x36f68a) {
  const _0x5438ec = _0x5438();
  return (
    (_0x31c3 = function (_0x31c3d9, _0x28cd96) {
      _0x31c3d9 = _0x31c3d9 - 0xd2;
      let _0x32ec37 = _0x5438ec[_0x31c3d9];
      return _0x32ec37;
    }),
    _0x31c3(_0x20bc65, _0x36f68a)
  );
}
function _0x5438() {
  const _0x1c5463 = [
    "title",
    "textContent",
    "style",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22movie-title\x22>",
    "Bearer\x20eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
    "click",
    "matches",
    "none",
    "영화\x20id:\x20",
    "24kGztqg",
    "results",
    "1436046ESNoii",
    "129aJbKCO",
    "json",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "querySelector",
    "152010Uejtks",
    "812475FZPcoF",
    "join",
    "forEach",
    "673645bSmTkj",
    "indexOf",
    "preventDefault",
    "querySelectorAll",
    "addEventListener",
    ".card-list",
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
    "#search-input",
    "toLowerCase",
    "16631252rGHavj",
    "block",
    "15094bYIGxc",
    "vote_average",
    "map",
    ".movie-card",
    "441TOGuTO",
    "\x22\x20alt=\x22",
    "display",
    "2558560xRAbRX",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Rating:\x20",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://image.tmdb.org/t/p/w500",
    "GET",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22movie-card\x22\x20id=",
    "application/json",
    "value",
    "5nnVtrL",
    "innerHTML",
  ];
  _0x5438 = function () {
    return _0x1c5463;
  };
  return _0x5438();
}
const handleSearch = (_0x4a90e9) => {
    const _0x7a18fc = _0x42f828;
    _0x4a90e9[_0x7a18fc(0xd2)]();
    const _0x2a2b34 = document[_0x7a18fc(0xd3)](_0x7a18fc(0xde)),
      _0x1fc165 = searchInput[_0x7a18fc(0xe8)][_0x7a18fc(0xd8)]();
    _0x2a2b34[_0x7a18fc(0xfe)]((_0x4608d2) => {
      const _0x1f84e6 = _0x7a18fc,
        _0xfd02e =
          _0x4608d2["querySelector"](".movie-title")[_0x1f84e6(0xec)][
            _0x1f84e6(0xd8)
          ]();
      _0xfd02e[_0x1f84e6(0x100)](_0x1fc165) !== -0x1
        ? (_0x4608d2["style"][_0x1f84e6(0xe1)] = _0x1f84e6(0xda))
        : (_0x4608d2[_0x1f84e6(0xed)][_0x1f84e6(0xe1)] = _0x1f84e6(0xf2));
    });
  },
  fetchMovieData = async () => {
    const _0x48f79d = _0x42f828,
      _0xb02ffe = {
        method: _0x48f79d(0xe5),
        headers: { accept: _0x48f79d(0xe7), Authorization: _0x48f79d(0xef) },
      },
      _0x117b77 = await fetch(_0x48f79d(0xd6), _0xb02ffe),
      _0x213530 = await _0x117b77[_0x48f79d(0xf8)]();
    return _0x213530[_0x48f79d(0xf5)];
  },
  createMovieCards = async () => {
    const _0x25955f = _0x42f828,
      _0x359686 = await fetchMovieData(),
      _0x2dbb8f = document[_0x25955f(0xfa)](_0x25955f(0xd5));
    (_0x2dbb8f[_0x25955f(0xea)] = _0x359686[_0x25955f(0xdd)](
      (_0x401b31) =>
        _0x25955f(0xe6) +
        _0x401b31["id"] +
        _0x25955f(0xe4) +
        _0x401b31["poster_path"] +
        _0x25955f(0xe0) +
        _0x401b31[_0x25955f(0xeb)] +
        _0x25955f(0xee) +
        _0x401b31[_0x25955f(0xeb)] +
        "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>" +
        _0x401b31["overview"] +
        _0x25955f(0xe3) +
        _0x401b31[_0x25955f(0xdc)] +
        _0x25955f(0xf9)
    )[_0x25955f(0xfd)]("")),
      _0x2dbb8f[_0x25955f(0xd4)](_0x25955f(0xf0), ({ target: _0x29eb19 }) => {
        const _0x15cb0f = _0x25955f;
        _0x29eb19 !== _0x2dbb8f &&
          (_0x29eb19[_0x15cb0f(0xf1)](".movie-card")
            ? alert(_0x15cb0f(0xf3) + _0x29eb19["id"])
            : alert("영화\x20id:\x20" + _0x29eb19["parentNode"]["id"]));
      });
  };
createMovieCards();
