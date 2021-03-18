// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

export default function(api: IApi) {
  api.describe({
    key: 'cssReplacer',
    config: {
      default: {
        filename: 'css_replacer',
      },
      schema(joi) {
        return joi.object();
      },
    },
    enableBy: api.EnableBy.register,
  });

  let script = '';
  const { cssReplacer } = api.userConfig;
  if (cssReplacer) {
    api.onDevCompileDone(({ stats }) => {
      Object.keys(stats.compilation.assets).forEach(key => {
        if (cssReplacer.filename && key.indexOf(cssReplacer.filename) > -1) {
          script = `<script src="/${key}" type="text/javascript"></script>`;
        }
      });
    });
    api.modifyHTML($ => {
      $('body').prepend(script);
      return $;
    });
  }
}
