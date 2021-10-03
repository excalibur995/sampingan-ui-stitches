(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    101: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return typographyDefaultProps;
      });
      var typographyDefaultProps = {
        system: 'Sampingan',
        ink: 'neutral',
        variant: 'title-t1',
        children: '',
        transform: 'none',
      };
    },
    121: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return styled;
      });
      __webpack_require__(8);
      var _stitches_react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(219),
        _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65),
        _createStitches = Object(
          _stitches_react__WEBPACK_IMPORTED_MODULE_1__.a
        )({
          theme: {
            fonts: { mono: 'Söhne Mono, menlo, monospace' },
            colors: Object.assign(
              {},
              _utils_helper__WEBPACK_IMPORTED_MODULE_2__.a.colors
            ),
            radii: { rounded: '9999px' },
          },
          utils: {
            mx: function mx(value) {
              return { marginRight: value, marginLeft: value };
            },
            size: function size(value) {
              return { width: value, height: value };
            },
            radius: function radius(value) {
              return {
                borderRadius:
                  _utils_helper__WEBPACK_IMPORTED_MODULE_2__.a.radii[value],
              };
            },
          },
        }),
        styled = _createStitches.styled;
      _createStitches.css, _createStitches.keyframes;
    },
    166: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(0);
      var dist = __webpack_require__(219),
        theme = __webpack_require__(121),
        spinnerDefaultProps = {
          id: 'spinner--id',
          size: 'small',
          color: 'sampingan_white',
          inlineStyle: {},
        },
        jsx_runtime = __webpack_require__(29),
        rotatingSpin = Object(dist.b)({
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }),
        SpinnerComponent = Object(theme.a)('div', {
          animation: rotatingSpin + ' 2s linear infinite',
          borderTop: '2px solid',
          radius: 'rounded-full',
          variants: {
            size: {
              none: { size: '0px' },
              small: { size: '10px' },
              medium: { size: '16px' },
              large: { size: '24px' },
            },
          },
          defaultVariants: { size: spinnerDefaultProps.size },
        }),
        Spinner_useColorSpinner = function useColorSpinner(color) {
          return null != color ? color : spinnerDefaultProps.color;
        },
        Spinner_Spinner = function Spinner(_ref) {
          var color = _ref.color,
            size = _ref.size;
          return Object(jsx_runtime.jsx)(SpinnerComponent, {
            css: { borderTopColor: '$' + Spinner_useColorSpinner(color) },
            size: size,
          });
        };
      (Spinner_Spinner.displayName = 'Spinner'),
        (Spinner_Spinner.defaultProps = spinnerDefaultProps);
      try {
        (Spinner_Spinner.displayName = 'Spinner'),
          (Spinner_Spinner.__docgenInfo = {
            description: '',
            displayName: 'Spinner',
            props: {
              size: {
                defaultValue: null,
                description: 'Indicate Spinner Size',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              color: {
                defaultValue: null,
                description: 'Indicate Spinner Color',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"kerjaan_primary"' },
                    { value: '"kerjaan_secondary"' },
                    { value: '"kerjaan_positive"' },
                    { value: '"kerjaan_negative"' },
                    { value: '"kerjaan_warning"' },
                    { value: '"kerjaan_neutral"' },
                    { value: '"kerjaan_white"' },
                    { value: '"sampingan_primary"' },
                    { value: '"sampingan_secondary"' },
                    { value: '"sampingan_positive"' },
                    { value: '"sampingan_negative"' },
                    { value: '"sampingan_warning"' },
                    { value: '"sampingan_neutral"' },
                    { value: '"sampingan_white"' },
                  ],
                },
              },
              id: {
                defaultValue: null,
                description: 'Indicate component identifier',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              inlineStyle: {
                defaultValue: null,
                description: 'Indicate component inline style extra',
                name: 'inlineStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Spinner/Spinner.tsx#Spinner'
            ] = {
              docgenInfo: Spinner_Spinner.__docgenInfo,
              name: 'Spinner',
              path: 'src/components/Spinner/Spinner.tsx#Spinner',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.a = Spinner_Spinner;
    },
    462: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/code-brackets.2e1112d7.svg';
    },
    463: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/colors.a4bd0486.svg';
    },
    464: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/comments.a3859089.svg';
    },
    465: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/direction.b770f9af.svg';
    },
    466: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/flow.edad2ac1.svg';
    },
    467: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/plugin.d494b228.svg';
    },
    468: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/repo.6d496322.svg';
    },
    469: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/stackalt.dba9fbb3.svg';
    },
    489: function (module, exports, __webpack_require__) {
      __webpack_require__(490),
        __webpack_require__(650),
        __webpack_require__(651),
        __webpack_require__(860),
        __webpack_require__(855),
        __webpack_require__(863),
        __webpack_require__(864),
        __webpack_require__(861),
        __webpack_require__(856),
        __webpack_require__(865),
        __webpack_require__(857),
        __webpack_require__(858),
        __webpack_require__(866),
        (module.exports = __webpack_require__(850));
    },
    557: function (module, exports) {},
    65: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return useTypographyInk;
      }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return useVariantTag;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return uiColorThemeHelper;
        });
      __webpack_require__(434);
      var _components_Typography_Typoghraphy_types__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(101),
        useTypographyInk = function useTypographyInk(system, ink) {
          return system && ink
            ? ('$' + system + '_' + ink).toLowerCase()
            : (
                '$' +
                (null != system
                  ? system
                  : _components_Typography_Typoghraphy_types__WEBPACK_IMPORTED_MODULE_1__
                      .a.system) +
                '_' +
                (null != ink
                  ? ink
                  : _components_Typography_Typoghraphy_types__WEBPACK_IMPORTED_MODULE_1__
                      .a.ink)
              ).toLowerCase();
        },
        useVariantTag = function useVariantTag(variant) {
          switch (variant.substring(0, variant.indexOf('-'))) {
            case 'title':
              return 'h1';
            case 'header':
              return 'h3';
            case 'paragraph':
              return 'p';
            default:
              return 'span';
          }
        },
        uiColorThemeHelper = {
          colors: {
            kerjaan_primary: '#0492F7',
            kerjaan_secondary: '#F76904',
            kerjaan_positive: '#009D00',
            kerjaan_negative: '#E50013',
            kerjaan_warning: '#F6B700',
            kerjaan_neutral: '#333A3F',
            kerjaan_white: '#fff',
            sampingan_primary: '#F9C45F',
            sampingan_secondary: '#5F95F9',
            sampingan_positive: '#32B917',
            sampingan_negative: '#F26056',
            sampingan_warning: '#F9EA5F',
            sampingan_neutral: '#262626',
            sampingan_white: '#fff',
          },
          font: {
            'title-t1': {
              fontSize: '2rem',
              lineHeight: '40px',
              fontWeight: 700,
            },
            'title-t2': {
              fontSize: '1.5rem',
              lineHeight: '28px',
              fontWeight: 700,
            },
            'header-h1': {
              fontSize: '1.25rem',
              lineHeight: '24px',
              fontWeight: 700,
            },
            'header-h2': {
              fontSize: '1rem',
              lineHeight: '24px',
              fontWeight: 700,
            },
            'field-f1-4': {
              fontSize: '1rem',
              lineHeight: '24px',
              fontWeight: 400,
            },
            'field-f1-5': {
              fontSize: '1rem',
              lineHeight: '24px',
              fontWeight: 500,
            },
            'field-f1-7': {
              fontSize: '1rem',
              lineHeight: '24px',
              fontWeight: 700,
            },
            'field-f2-4': {
              fontSize: '0.875rem',
              lineHeight: '22px',
              fontWeight: 400,
            },
            'field-f2-5': {
              fontSize: '0.875rem',
              lineHeight: '22px',
              fontWeight: 500,
            },
            'field-f2-7': {
              fontSize: '0.875rem',
              lineHeight: '22px',
              fontWeight: 700,
            },
            'paragraph-p1-4': {
              fontSize: '0.875rem',
              lineHeight: '20px',
              fontWeight: 400,
            },
            'paragraph-p1-5': {
              fontSize: '0.875rem',
              lineHeight: '20px',
              fontWeight: 500,
            },
            'paragraph-p1-7': {
              fontSize: '0.875rem',
              lineHeight: '20px',
              fontWeight: 700,
            },
            'paragraph-p2-4': {
              fontSize: '0.75rem',
              lineHeight: '16px',
              fontWeight: 400,
            },
            'paragraph-p2-5': {
              fontSize: '0.75rem',
              lineHeight: '16px',
              fontWeight: 500,
            },
            'paragraph-p2-7': {
              fontSize: '0.75rem',
              lineHeight: '16px',
              fontWeight: 700,
            },
            'button-b1': {
              fontSize: '1rem',
              lineHeight: '24px',
              fontWeight: 400,
            },
            'button-b2': {
              fontSize: '0.875rem',
              lineHeight: '22px',
              fontWeight: 400,
            },
          },
          radii: {
            'rounded-none': '0px',
            'semi-rounded': '4px',
            rounded: '10px',
            'rounded-full': '9999px',
          },
        };
    },
    651: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(346);
    },
    850: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(346).configure)(
          [__webpack_require__(851), __webpack_require__(853)],
          module,
          !1
        );
      }.call(this, __webpack_require__(199)(module)));
    },
    851: function (module, exports, __webpack_require__) {
      var map = { './Introduction.stories.mdx': 852 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 851);
    },
    852: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(22),
        __webpack_require__(434),
        __webpack_require__(5),
        __webpack_require__(8),
        __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(218),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(462),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default =
          __webpack_require__.n(
            _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__
          ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(463),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__
          ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(464),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__
          ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(465),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__
          ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(466),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(467),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(
            _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__
          ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(468),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default =
          __webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(469),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default =
          __webpack_require__.n(
            _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__
          ),
        _excluded = ['components'];
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
            { title: 'Example/Introduction', mdxType: 'Meta' }
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'style',
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'welcome-to-storybook' },
            'Welcome to Storybook'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'stories'
            ),
            ' to revisit during development, testing, or QA.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'inlineCode',
              { parentName: 'p' },
              'src/stories'
            ),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                { parentName: 'a' },
                'component-driven'
              )
            ),
            ' process starting with atomic components and ending with pages.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'subheading' },
            'Configure'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                alt: 'plugin',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Presets for popular tools'
                ),
                'Easy setup for TypeScript, SCSS and more.'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: 'Build',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Build configuration'
                ),
                'How to customize webpack and Babel'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: 'colors',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Styling'
                ),
                'How to load and configure CSS libraries'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                alt: 'flow',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Data'
                ),
                'Providers and mocking for data libraries'
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'subheading' },
            'Learn'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                alt: 'repo',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Storybook documentation'
                ),
                'Configure, customize, and extend'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: 'direction',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'In-depth guides'
                ),
                'Best practices from leading teams'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://github.com/storybookjs/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: 'code',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'GitHub project'
                ),
                'View the source and add issues'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://discord.gg/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: 'comments',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Discord chat'
                ),
                'Chat with maintainers and the community'
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'tip-wrapper' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'span',
              { className: 'tip' },
              'Tip'
            ),
            'Edit the Markdown in',
            ' ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              null,
              'src/stories/Introduction.stories.mdx'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Example/Introduction',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    853: function (module, exports, __webpack_require__) {
      var map = {
        './atom/Button.stories.tsx': 859,
        './atom/Spinner.stories.tsx': 854,
        './atom/Typography.stories.tsx': 862,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 853);
    },
    854: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'Undefined_Color',
          function () {
            return Undefined_Color;
          }
        );
      __webpack_require__(8), __webpack_require__(435), __webpack_require__(0);
      var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(166),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(29);
      __webpack_exports__.default = {
        title: 'Atom/Spinner',
        component: _components_Spinner__WEBPACK_IMPORTED_MODULE_3__.a,
      };
      var Template = function Template(props) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _components_Spinner__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, props)
        );
      };
      Template.displayName = 'Template';
      var Basic = Template.bind({}),
        Undefined_Color = Template.bind({});
      (Basic.args = { size: 'small', color: 'kerjaan_primary' }),
        (Undefined_Color.args = { color: 'lasdasldasdkaskd' }),
        (Basic.parameters = Object.assign(
          { storySource: { source: '(props) => <Spinner {...props} />' } },
          Basic.parameters
        )),
        (Undefined_Color.parameters = Object.assign(
          { storySource: { source: '(props) => <Spinner {...props} />' } },
          Undefined_Color.parameters
        ));
    },
    859: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        });
      __webpack_require__(8), __webpack_require__(435);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Spinner = __webpack_require__(166),
        theme = __webpack_require__(121),
        buttonDefaultProps = {
          id: 'sampingan--button',
          type: 'primary',
          size: 'medium',
          children: '',
          loading: !1,
          disabled: !1,
          color: 'sampingan_primary',
          inlineStyle: {},
          block: !1,
          feedback: 'neutral',
          system: 'Sampingan',
          ink: 'primary',
          loadingInk: 'sampingan_white',
        },
        helper = __webpack_require__(65),
        jsx_runtime = __webpack_require__(29),
        ButtonContainer = Object(theme.a)('button', {
          radius: 'semi-rounded',
          border: 'none',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          variants: {
            block: { true: { width: '100%' } },
            size: {
              small: { minWidth: 58, height: 30 },
              medium: { minWidth: 72, height: 40 },
              large: { minWidth: 96, height: 56 },
            },
            type: { primary: {}, secondary: {}, tertiary: {}, ghost: {} },
          },
          '&:disabled': { '\tbackground-color': '#cccccc' },
          '&:active': { opacity: 0.3 },
          transition: 'all 0.5s ease',
          color: '$kerjaan_white',
          defaultVariants: {
            type: buttonDefaultProps.type,
            size: buttonDefaultProps.size,
            block: !1,
          },
        }),
        SpinnerContainer = Object(theme.a)('span', {
          display: 'inline-block',
          verticalAlign: 'sub',
          transition: 'margin 0.5s ease',
          variants: { loading: { true: { mx: '8px' } } },
          defaultVariants: { loading: !1 },
        });
      function LoadingConditionContainer(props) {
        var loading = props.loading,
          children = props.children,
          size = props.size,
          loadingInk = props.loadingInk,
          sizes = loading
            ? null != size
              ? size
              : buttonDefaultProps.size
            : 'none';
        return Object(jsx_runtime.jsxs)(react_default.a.Fragment, {
          children: [
            Object(jsx_runtime.jsx)(SpinnerContainer, {
              loading: loading,
              children: Object(jsx_runtime.jsx)(Spinner.a, {
                size: sizes,
                color: loadingInk,
              }),
            }),
            children,
          ],
        });
      }
      LoadingConditionContainer.displayName = 'LoadingConditionContainer';
      var Button_Button = function Button(props) {
        var id = props.id,
          size = props.size,
          type = props.type,
          children = props.children,
          block = props.block,
          inlineStyle = props.inlineStyle,
          ink = props.ink,
          system = props.system,
          disabled = props.disabled,
          cssComposer = react_default.a.useMemo(
            function () {
              return {};
            },
            [props]
          ),
          buttonInk = Object(helper.b)(system, ink);
        return Object(jsx_runtime.jsx)(ButtonContainer, {
          id: id,
          css: Object.assign(
            { background: buttonInk },
            cssComposer,
            inlineStyle
          ),
          disabled: disabled,
          size: size,
          block: block,
          type: type,
          children: Object(jsx_runtime.jsx)(
            LoadingConditionContainer,
            Object.assign({}, props, { children: children })
          ),
        });
      };
      (Button_Button.displayName = 'Button'),
        (Button_Button.defaultProps = buttonDefaultProps);
      try {
        (Button_Button.displayName = 'Button'),
          (Button_Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              type: {
                defaultValue: null,
                description: "Define the button variant based on it's role",
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"tertiary"' },
                    { value: '"ghost"' },
                  ],
                },
              },
              size: {
                defaultValue: null,
                description: 'Define the button sizes',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              children: {
                defaultValue: null,
                description: 'Button content',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              loading: {
                defaultValue: null,
                description: 'indicates button loading',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: 'indicates is button disabled or not,',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              block: {
                defaultValue: null,
                description:
                  'block property will make the button fit to its parent width.',
                name: 'block',
                required: !1,
                type: { name: 'boolean' },
              },
              feedback: {
                defaultValue: null,
                description: 'indicates the feedback of the button',
                name: 'feedback',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"positive"' },
                    { value: '"negative"' },
                    { value: '"warning"' },
                    { value: '"neutral"' },
                    { value: '"high-priority"' },
                  ],
                },
              },
              system: {
                defaultValue: null,
                description: 'indicates the role of system',
                name: 'system',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"Kerjaan"' }, { value: '"Sampingan"' }],
                },
              },
              ink: {
                defaultValue: null,
                description: 'indicates the color of Button',
                name: 'ink',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"positive"' },
                    { value: '"negative"' },
                    { value: '"warning"' },
                    { value: '"neutral"' },
                    { value: '"white"' },
                  ],
                },
              },
              loadingInk: {
                defaultValue: null,
                description: 'Indicate Spinner Color',
                name: 'loadingInk',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"kerjaan_primary"' },
                    { value: '"kerjaan_secondary"' },
                    { value: '"kerjaan_positive"' },
                    { value: '"kerjaan_negative"' },
                    { value: '"kerjaan_warning"' },
                    { value: '"kerjaan_neutral"' },
                    { value: '"kerjaan_white"' },
                    { value: '"sampingan_primary"' },
                    { value: '"sampingan_secondary"' },
                    { value: '"sampingan_positive"' },
                    { value: '"sampingan_negative"' },
                    { value: '"sampingan_warning"' },
                    { value: '"sampingan_neutral"' },
                    { value: '"sampingan_white"' },
                  ],
                },
              },
              color: {
                defaultValue: null,
                description: 'Indicate Spinner Color',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"kerjaan_primary"' },
                    { value: '"kerjaan_secondary"' },
                    { value: '"kerjaan_positive"' },
                    { value: '"kerjaan_negative"' },
                    { value: '"kerjaan_warning"' },
                    { value: '"kerjaan_neutral"' },
                    { value: '"kerjaan_white"' },
                    { value: '"sampingan_primary"' },
                    { value: '"sampingan_secondary"' },
                    { value: '"sampingan_positive"' },
                    { value: '"sampingan_negative"' },
                    { value: '"sampingan_warning"' },
                    { value: '"sampingan_neutral"' },
                    { value: '"sampingan_white"' },
                  ],
                },
              },
              id: {
                defaultValue: null,
                description: 'Indicate component identifier',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              inlineStyle: {
                defaultValue: null,
                description: 'Indicate component inline style extra',
                name: 'inlineStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Button/Button.tsx#Button'
            ] = {
              docgenInfo: Button_Button.__docgenInfo,
              name: 'Button',
              path: 'src/components/Button/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var components_Button = Button_Button,
        Button_stories_Template =
          ((__webpack_exports__.default = {
            title: 'Atom/Button',
            component: components_Button,
          }),
          function Template(props) {
            return Object(jsx_runtime.jsxs)(react_default.a.Fragment, {
              children: [
                Object(jsx_runtime.jsx)('h1', {
                  children: 'Still on Progres...',
                }),
                Object(jsx_runtime.jsx)(
                  components_Button,
                  Object.assign({}, props)
                ),
              ],
            });
          });
      Button_stories_Template.displayName = 'Template';
      var Basic = Button_stories_Template.bind({});
      (Basic.args = Object.assign({}, buttonDefaultProps, {
        children: 'Button',
      })),
        (Basic.parameters = Object.assign(
          {
            storySource: {
              source:
                '(props) => (\n  <React.Fragment>\n    <h1>Still on Progres...</h1>\n    <Button {...props} />\n  </React.Fragment>\n)',
            },
          },
          Basic.parameters
        ));
    },
    862: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Typography_stories_Basic;
        }),
        __webpack_require__.d(__webpack_exports__, 'Variants', function () {
          return Typography_stories_Variants;
        });
      __webpack_require__(8),
        __webpack_require__(50),
        __webpack_require__(28),
        __webpack_require__(22),
        __webpack_require__(25);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src_theme = __webpack_require__(121),
        helper = __webpack_require__(65),
        Typoghraphy_types = __webpack_require__(101),
        jsx_runtime = __webpack_require__(29),
        TypographyContent = Object(src_theme.a)('span', {
          variants: { variant: Object.assign({}, helper.a.font) },
          defaultVariants: { variant: Typoghraphy_types.a.variant },
        }),
        Typography_Typography = function Typography(_ref) {
          var system = _ref.system,
            ink = _ref.ink,
            variant = _ref.variant,
            transform = _ref.transform,
            children = _ref.children,
            typoTag = Object(helper.c)(
              null != variant ? variant : Typoghraphy_types.a.variant
            ),
            typographyInk = Object(helper.b)(system, ink);
          return Object(jsx_runtime.jsx)(TypographyContent, {
            as: typoTag,
            variant: variant,
            css: {
              textTransform: transform,
              color: typographyInk,
              fontFamily: '$mono',
            },
            children: children,
          });
        };
      (Typography_Typography.displayName = 'Typography'),
        (Typography_Typography.defaultProps = Typoghraphy_types.a);
      try {
        (Typography_Typography.displayName = 'Typography'),
          (Typography_Typography.__docgenInfo = {
            description: '',
            displayName: 'Typography',
            props: {
              children: {
                defaultValue: null,
                description: 'Typography content',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              system: {
                defaultValue: null,
                description:
                  'Components Role, decide component what project user in',
                name: 'system',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"Kerjaan"' }, { value: '"Sampingan"' }],
                },
              },
              ink: {
                defaultValue: null,
                description: 'Text Color for the text',
                name: 'ink',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"positive"' },
                    { value: '"negative"' },
                    { value: '"warning"' },
                    { value: '"neutral"' },
                    { value: '"white"' },
                  ],
                },
              },
              variant: {
                defaultValue: null,
                description: 'Define text sizes, line height, font weight',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"title-t1"' },
                    { value: '"title-t2"' },
                    { value: '"header-h1"' },
                    { value: '"header-h2"' },
                    { value: '"field-f1-4"' },
                    { value: '"field-f1-5"' },
                    { value: '"field-f1-7"' },
                    { value: '"field-f2-4"' },
                    { value: '"field-f2-5"' },
                    { value: '"field-f2-7"' },
                    { value: '"paragraph-p1-4"' },
                    { value: '"paragraph-p1-5"' },
                    { value: '"paragraph-p1-7"' },
                    { value: '"paragraph-p2-4"' },
                    { value: '"paragraph-p2-5"' },
                    { value: '"paragraph-p2-7"' },
                    { value: '"button-b1"' },
                    { value: '"button-b2"' },
                  ],
                },
              },
              transform: {
                defaultValue: null,
                description: 'Define the text transformation',
                name: 'transform',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"capitalize"' },
                    { value: '"uppercase"' },
                    { value: '"lowercase"' },
                    { value: '"initial"' },
                    { value: '"inherit"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Typography/Typography.tsx#Typography'
            ] = {
              docgenInfo: Typography_Typography.__docgenInfo,
              name: 'Typography',
              path: 'src/components/Typography/Typography.tsx#Typography',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var components_Typography = react_default.a.memo(Typography_Typography),
        Typography_stories_Basic =
          ((__webpack_exports__.default = {
            title: 'Atom/Typography',
            component: components_Typography,
          }),
          function Basic(args) {
            return Object(jsx_runtime.jsx)(
              components_Typography,
              Object.assign({}, args)
            );
          });
      (Typography_stories_Basic.displayName = 'Basic'),
        (Typography_stories_Basic.args = Object.assign(
          {},
          Typoghraphy_types.a,
          { children: 'The quick brown fox jumps over the lazy dog' }
        ));
      var Typography_stories_VariantDetail = function VariantDetail(_ref) {
        var detail = _ref.detail,
          variant = _ref.variant,
          theme = helper.a.font[variant][detail],
          text = detail.replace(/[A-Z]/g, function (letter) {
            return ' ' + letter;
          });
        return Object(jsx_runtime.jsxs)(components_Typography, {
          transform: 'capitalize',
          variant: 'paragraph-p2-4',
          children: [
            text,
            ': ',
            Object(jsx_runtime.jsx)('b', { children: theme }),
          ],
        });
      };
      Typography_stories_VariantDetail.displayName = 'VariantDetail';
      var Typography_stories_Variants = function Variants() {
        var availableFonts = Object.keys(helper.a.font);
        return Object(jsx_runtime.jsx)(react_default.a.Fragment, {
          children: availableFonts.map(function (font_variant) {
            return Object(jsx_runtime.jsxs)(
              'div',
              {
                style: { margin: '5px auto' },
                children: [
                  Object(jsx_runtime.jsx)(components_Typography, {
                    variant: font_variant,
                    children: font_variant,
                  }),
                  Object(jsx_runtime.jsxs)('div', {
                    style: { borderTop: 'thin solid #bbb', padding: '5px 0' },
                    children: [
                      Object(jsx_runtime.jsx)(
                        Typography_stories_VariantDetail,
                        { variant: font_variant, detail: 'fontSize' }
                      ),
                      Object(jsx_runtime.jsx)(
                        Typography_stories_VariantDetail,
                        { variant: font_variant, detail: 'fontWeight' }
                      ),
                      Object(jsx_runtime.jsx)(
                        Typography_stories_VariantDetail,
                        { variant: font_variant, detail: 'lineHeight' }
                      ),
                    ],
                  }),
                ],
              },
              font_variant
            );
          }),
        });
      };
      (Typography_stories_Variants.displayName = 'Variants'),
        (Typography_stories_Basic.parameters = Object.assign(
          { storySource: { source: '(args) => <Typography {...args} />' } },
          Typography_stories_Basic.parameters
        )),
        (Typography_stories_Variants.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => {\n  const availableFonts = Object.keys(uiColorThemeHelper.font);\n  return (\n    <React.Fragment>\n      {availableFonts.map((font_variant) => (\n        <div style={{ margin: \'5px auto\' }} key={font_variant}>\n          <Typography variant={font_variant as SampinganFontSizeVariant}>\n            {font_variant}\n          </Typography>\n          <div\n            style={{\n              borderTop: \'thin solid #bbb\',\n              padding: \'5px 0\',\n            }}\n          >\n            <VariantDetail\n              variant={font_variant as SampinganFontSizeVariant}\n              detail="fontSize"\n            />\n            <VariantDetail\n              variant={font_variant as SampinganFontSizeVariant}\n              detail="fontWeight"\n            />\n            <VariantDetail\n              variant={font_variant as SampinganFontSizeVariant}\n              detail="lineHeight"\n            />\n          </div>\n        </div>\n      ))}\n    </React.Fragment>\n  );\n}',
            },
          },
          Typography_stories_Variants.parameters
        ));
    },
    866: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          'decorators',
          function () {
            return decorators;
          }
        );
      __webpack_require__(22),
        __webpack_require__(5),
        __webpack_require__(51),
        __webpack_require__(426),
        __webpack_require__(846),
        __webpack_require__(47),
        __webpack_require__(847),
        __webpack_require__(848),
        __webpack_require__(425);
      var client_api = __webpack_require__(873),
        esm = __webpack_require__(4),
        create =
          (__webpack_require__(8),
          __webpack_require__(0),
          __webpack_require__(140)),
        jsx_runtime = __webpack_require__(29),
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: { expanded: !0 },
          darkMode: {
            dark: Object.assign({}, create.a.dark, { appBg: 'black' }),
            light: Object.assign({}, create.a.normal, { appBg: 'white' }),
          },
        },
        decorators = [
          function (Story) {
            return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: Object(jsx_runtime.jsx)(Story, {}),
            });
          },
        ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(client_api.c)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(client_api.d)(loader, !1);
            });
          case 'parameters':
            return Object(client_api.e)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.a)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.b)(enhancer);
            });
          case 'render':
            return Object(client_api.g)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(client_api.e)(v, !1);
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
  },
  [[489, 2, 3]],
]);
