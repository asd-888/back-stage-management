<<<<<<< HEAD
=======
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:40:43
 * @Description: 
 */
>>>>>>> 773942151334d6589e839e73bebd5d25c109afa1
// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}
