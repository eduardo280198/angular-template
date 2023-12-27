import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  // Pendiente
  {
    id: 'widgets',
    title: 'Widgets',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'statistic',
        title: 'Statistics',
        type: 'item',
        classes:'nav-item',
        url: 'javascript:void(0)',
        icon: 'ti ti-chart-arcs',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'page',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'ti ti-key',
        children: [
          {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/guest/login',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/guest/register',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'ti ti-typography'
      },
      {
        id: 'basic',
        title: 'Basic Components',
        type: 'collapse',
        icon: 'ti ti-apps',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: 'basic/alert',
            target: false, // Abre otra pestania cuando el valor es true
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: 'basic/button',
            target: false,
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: 'basic/badges',
            target: false
          },
          // {
          //   id: 'breadcrumb',
          //   title: 'Breadcrumb',
          //   type: 'item',
          //   url: 'basic/breadcrumb',
          //   target: false,
          // },
          {
            id: 'pagination',
            title: 'Pagination',
            type: 'item',
            url: 'basic/pagination',
            target: false,
          },
          {
            id: 'card',
            title: 'Card',
            type: 'item',
            url: 'basic/card',
            target: false,
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: 'basic/collapse',
            target: false,
          },
          {
            id: 'accordion',
            title: 'Accordion',
            type: 'item',
            url: 'basic/accordion',
            target: false,
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: 'basic/carousel',
            target: false,
          },
          {
            id      : 'dropdown',
            title: 'Dropdowns',
            type: 'item',
            url: 'basic/dropdown',
            target: false,
          },
          {
            id      : 'offcanvas',
            title   : 'Offcanvas',
            type    : 'item',
            url     : 'basic/offcanvas',
            target  : false,
          },
          {
            id      : 'progress',
            title   : 'Progress',
            type    : 'item',
            url     : 'basic/progress',
            target  : false,
          },
          {
            id      : 'listGroup',
            title   : 'List Group',
            type    : 'item',
            url     : 'basic/list-group',
            target  : false,
          },
          {
            id      : 'modal',
            title   : 'Modal',
            type    : 'item',
            url     : 'basic/modal',
            target  : false,
          },
          {
            id      : 'spinner',
            title   : 'Spinner',
            type    : 'item',
            url     : 'basic/spinner',
            target  : false,
          },
          {
            id      : 'tabs-pills',
            title   : 'Tabs & pills',
            type    : 'item',
            url     : 'basic/tabs-pills',
            target  : false,
          },
          // {
          //   id      : 'toast',
          //   title   : 'Toasts',
          //   type    : 'item',
          //   url     : 'basic/toast',
          //   target  : false,
          // },
          {
            id      : 'other',
            title   : 'Other',
            type    : 'item',
            url     : 'basic/other',
            target  : false,
          }
        ]
      },
      {
        id: 'color',
        title: 'Colors',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
        icon: 'ti ti-brush'
      },
      {
        id: 'tabler',
        title: 'Tabler',
        type: 'item',
        classes: 'nav-item',
        url: 'https://tabler-icons.io/',
        icon: 'ti ti-plant-2',
        target: true,
        external: true
      }
    ]
  },
  {
    id        : 'forms',
    title     : 'Forms',
    type      : 'group',
    icon      : 'icon-navigation',
    children  : [
      {
        id        : 'form-elements',
        title     : 'Form Elements',
        type      : 'collapse',
        icon      : 'ti ti-forms',
        children  : [
          {
            id      : 'form-basic',
            title   : 'Form Basic',
            type    : 'item',
            url     : 'forms/basic',
            target  : false,
          },
          {
            id      : 'form-advance',
            title   : 'Form Advance',
            type    : 'item',
            url     : 'forms/advance',
            target  : false,
          },
          {
            id      : 'form-validation',
            title   : 'Form Validation',
            type    : 'item',
            url     : 'forms/validation',
            target  : false,
          },
          {
            id      : 'form-masking',
            title   : 'Form Masking',
            type    : 'item',
            url     : 'forms/masking',
            target  : false
          },
          {
            id      : 'form-picker',
            title   : 'Form Picker',
            type    : 'item',
            url     : 'forms/picker',
            target  : false,
          },
          {
            id      : 'form-select',
            title   : 'Form Select',
            type    : 'item',
            url     : 'forms/select',
            target  : false
          }
        ]
      },
      {
        id        : 'form-layouts',
        title     : 'Form Layouts',
        type      : 'collapse',
        icon      : 'ti ti-layout',
        children  : [
          {
            id      : 'basicFormLayout',
            title   : 'Basic Layout',
            type    : 'item',
            url     : 'formsLayout/layout',
            target  : false,
          },
          {
            id      : 'wizardFormLayout',
            title   : 'Wizard Layout',
            type    : 'item',
            url     : 'formsLayout/wizard',
            target  : false,
          }
        ]
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/berry-angular/',
        icon: 'ti ti-vocabulary',
        target: true,
        external: true
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
