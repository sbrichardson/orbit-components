// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Table'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Table, Table as default }

declare namespace Table {
    interface Props extends Common.Global {
        readonly compact?: boolean;
        readonly children: React.ReactNode;
    }

    interface State {
        showShadows: boolean;
        showLeft: boolean;
        showRight: boolean;
    }
}

declare class Table extends React.Component<Table.Props> {}
