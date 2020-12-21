(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{407:function(e,o,t){"use strict";t.r(o);var r=t(43),d=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"api-docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-docs"}},[e._v("#")]),e._v(" API Docs")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Read "),t("a",{attrs:{href:"https://github.com/revolist/revogrid/blob/master/src/interfaces.d.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("type definition file"),t("OutboundLink")],1),e._v(" for the full interface information.\nAll complex properties such as "),t("code",[e._v("ColumnRegular")]),e._v(", "),t("code",[e._v("ColumnProp")]),e._v(", "),t("code",[e._v("ColumnDataSchemaModel")]),e._v(", etc. can be found there.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Attribute")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("autoSizeColumn")])]),e._v(" "),t("td",[t("code",[e._v("auto-size-column")])]),e._v(" "),t("td",[e._v("Autosize config Enable columns autoSize, for more details check @autoSizeColumn plugin By default disabled, hence operation is not resource efficient true to enable with default params (double header separator click for autosize) or provide config")]),e._v(" "),t("td",[t("code",[e._v("boolean \\| { mode?: ColumnAutoSizeMode; allColumns?: boolean; letterBlockSize?: number; preciseSize?: boolean; }")])]),e._v(" "),t("td",[t("code",[e._v("undefined")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("canFocus")])]),e._v(" "),t("td",[t("code",[e._v("can-focus")])]),e._v(" "),t("td",[e._v("When true cell focus appear.")]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("true")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("colSize")])]),e._v(" "),t("td",[t("code",[e._v("col-size")])]),e._v(" "),t("td",[e._v("Indicates default column size.")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("100")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("columnTypes")])]),e._v(" "),t("td",[e._v("--")]),e._v(" "),t("td",[e._v("Types Every type represent multiple column properties Types will be merged but can be replaced with column properties")]),e._v(" "),t("td",[t("code",[e._v("{ [name: string]: ColumnType; }")])]),e._v(" "),t("td",[t("code",[e._v("{}")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("columns")])]),e._v(" "),t("td",[e._v("--")]),e._v(" "),t("td",[e._v("Columns - defines an array of grid columns. Can be column or grouped column.")]),e._v(" "),t("td",[t("code",[e._v("(ColumnRegular \\| ColumnGrouping)[]")])]),e._v(" "),t("td",[t("code",[e._v("[]")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("editors")])]),e._v(" "),t("td",[e._v("--")]),e._v(" "),t("td",[e._v("Custom editors register")]),e._v(" "),t("td",[t("code",[e._v("{ [name: string]: EditorCtr; }")])]),e._v(" "),t("td",[t("code",[e._v("{}")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("frameSize")])]),e._v(" "),t("td",[t("code",[e._v("frame-size")])]),e._v(" "),t("td",[e._v("Defines how many rows/columns should be rendered outside visible area.")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("1")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("pinnedBottomSource")])]),e._v(" "),t("td",[e._v("--")]),e._v(" "),t("td",[e._v("Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.")]),e._v(" "),t("td",[t("code",[e._v("DataType[]")])]),e._v(" "),t("td",[t("code",[e._v("[]")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("pinnedTopSource")])]),e._v(" "),t("td",[e._v("--")]),e._v(" "),t("td",[e._v("Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.")]),e._v(" "),t("td",[t("code",[e._v("DataType[]")])]),e._v(" "),t("td",[t("code",[e._v("[]")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("range")])]),e._v(" "),t("td",[t("code",[e._v("range")])]),e._v(" "),t("td",[e._v("When true, user can range selection.")]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("false")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("readonly")])]),e._v(" "),t("td",[t("code",[e._v("readonly")])]),e._v(" "),t("td",[e._v("When true, grid in read only mode.")]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("false")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("resize")])]),e._v(" "),t("td",[t("code",[e._v("resize")])]),e._v(" "),t("td",[e._v("When true, columns are resizable.")]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("false")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("rowClass")])]),e._v(" "),t("td",[t("code",[e._v("row-class")])]),e._v(" "),t("td",[e._v("Row class property Define this property in row object and this will be mapped as row class")]),e._v(" "),t("td",[t("code",[e._v("string")])]),e._v(" "),t("td",[t("code",[e._v("''")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("rowDefinitions")])]),e._v(" "),t("td",[e._v("--")]),e._v(" "),t("td",[e._v("Row properies applied")]),e._v(" "),t("td",[t("code",[e._v("RowDefinition[]")])]),e._v(" "),t("td",[t("code",[e._v("[]")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("rowHeaders")])]),e._v(" "),t("td",[t("code",[e._v("row-headers")])]),e._v(" "),t("td",[e._v("Excel like show row indexe per row")]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("false")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("rowSize")])]),e._v(" "),t("td",[t("code",[e._v("row-size")])]),e._v(" "),t("td",[e._v("Indicates default row size. By default 0, means theme package size will be applied")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("source")])]),e._v(" "),t("td",[e._v("--")]),e._v(" "),t("td",[e._v("Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop")]),e._v(" "),t("td",[t("code",[e._v("DataType[]")])]),e._v(" "),t("td",[t("code",[e._v("[]")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("theme")])]),e._v(" "),t("td",[t("code",[e._v("theme")])]),e._v(" "),t("td",[e._v("Theme name")]),e._v(" "),t("td",[t("code",[e._v('"compact" \\| "darkCompact" \\| "darkMaterial" \\| "default" \\| "material"')])]),e._v(" "),t("td",[t("code",[e._v("'default'")])])])])]),e._v(" "),t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Event")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Type")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("afterEdit")])]),e._v(" "),t("td",[e._v("After edit. Triggered when after data applied or Range changeged.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ data: DataLookup; models: { [rowIndex: number]: DataType; }; type: DimensionRows; } \\| { prop: ColumnProp; model: DataType; val?: string; rowIndex: number; type: DimensionRows; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("afterSourceSet")])]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ type: DimensionRows; source: DataType[]; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeAutofill")])]),e._v(" "),t("td",[e._v("Before autofill. Triggered before autofill applied. Use e.preventDefault() to prevent edit data apply.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ type: DimensionRows; newRange: RangeArea; oldRange: RangeArea; newProps: ColumnProp[]; oldProps: ColumnProp[]; newData: { [key: number]: DataType; }; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeCellFocus")])]),e._v(" "),t("td",[e._v("Before cell focus changed. Use e.preventDefault() to prevent cell focus change.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ prop: ColumnProp; model: DataType; val?: string; rowIndex: number; type: DimensionRows; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeColumnsSet")])]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ columns: Record<DimensionCols, ColumnRegular[]>; columnGrouping: Record<DimensionCols, Group[]>; maxLevel: number; sort: Record<ColumnProp, ColumnRegular>; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeEdit")])]),e._v(" "),t("td",[e._v("Before edit event. Triggered before edit data applied. Use e.preventDefault() to prevent edit data set and use you own.  Use e.val = {your value} to replace edit result with your own.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ prop: ColumnProp; model: DataType; val?: string; rowIndex: number; type: DimensionRows; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeRange")])]),e._v(" "),t("td",[e._v("Before range apply. Triggered before range applied. Use e.preventDefault() to prevent range.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ type: DimensionRows; newRange: RangeArea; oldRange: RangeArea; newProps: ColumnProp[]; oldProps: ColumnProp[]; newData: { [key: number]: DataType; }; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeRangeEdit")])]),e._v(" "),t("td",[e._v("Before range edit event. Triggered before range data applied, when range selection happened. Use e.preventDefault() to prevent edit data set and use you own.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ data: DataLookup; models: { [rowIndex: number]: DataType; }; type: DimensionRows; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeSorting")])]),e._v(" "),t("td",[e._v("Before sorting event. Initial sorting triggered, if this event stops no other event called. Use e.preventDefault() to prevent sorting.")]),e._v(" "),t("td",[t("code",[e._v('CustomEvent<{ column: ColumnRegular; order: "desc" \\| "asc"; }>')])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeSortingApply")])]),e._v(" "),t("td",[e._v("Before sorting apply. Use e.preventDefault() to prevent sorting data change.")]),e._v(" "),t("td",[t("code",[e._v('CustomEvent<{ column: ColumnRegular; order: "desc" \\| "asc"; }>')])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("beforeSourceSortingApply")])]),e._v(" "),t("td",[e._v("Before source update sorting apply. Use this event if you intended to prevent sorting on data update. Use e.preventDefault() to prevent sorting data change during rows source update.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<any>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("headerClick")])]),e._v(" "),t("td",[e._v("On header click.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<ColumnRegular>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("rowDragStart")])]),e._v(" "),t("td",[e._v("Row order change started. Use e.preventDefault() to prevent row order change.  Use e.text = 'new name' to change item name on start.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ pos: PositionItem; text: string; }>")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("rowOrderChanged")])]),e._v(" "),t("td",[e._v("Before row order apply. Use e.preventDefault() to prevent row order change.")]),e._v(" "),t("td",[t("code",[e._v("CustomEvent<{ from: number; to: number; }>")])])])])]),e._v(" "),t("h2",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),t("h3",{attrs:{id:"refresh-type-revogrid-dimensionrows-all-promise-void"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refresh-type-revogrid-dimensionrows-all-promise-void"}},[e._v("#")]),e._v(" "),t("code",[e._v("refresh(type?: RevoGrid.DimensionRows | 'all') => Promise<void>")])]),e._v(" "),t("p",[e._v("Refreshes data viewport.\nCan be specific part as row or pinned row or 'all' by default.")]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("Promise<void>")])]),e._v(" "),t("h3",{attrs:{id:"scrolltocolumnindex-coordinate-number-promise-void"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrolltocolumnindex-coordinate-number-promise-void"}},[e._v("#")]),e._v(" "),t("code",[e._v("scrollToColumnIndex(coordinate?: number) => Promise<void>")])]),e._v(" "),t("p",[e._v("Scrolls view port to specified column index")]),e._v(" "),t("h4",{attrs:{id:"returns-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("Promise<void>")])]),e._v(" "),t("h3",{attrs:{id:"scrolltocolumnprop-prop-revogrid-columnprop-promise-void"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrolltocolumnprop-prop-revogrid-columnprop-promise-void"}},[e._v("#")]),e._v(" "),t("code",[e._v("scrollToColumnProp(prop: RevoGrid.ColumnProp) => Promise<void>")])]),e._v(" "),t("p",[e._v("Scrolls view port to specified column prop")]),e._v(" "),t("h4",{attrs:{id:"returns-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("Promise<void>")])]),e._v(" "),t("h3",{attrs:{id:"scrolltocoordinate-cell-partial-selection-cell-promise-void"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrolltocoordinate-cell-partial-selection-cell-promise-void"}},[e._v("#")]),e._v(" "),t("code",[e._v("scrollToCoordinate(cell: Partial<Selection.Cell>) => Promise<void>")])]),e._v(" "),t("p",[e._v("Scrolls view port to coordinate")]),e._v(" "),t("h4",{attrs:{id:"returns-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("Promise<void>")])]),e._v(" "),t("h3",{attrs:{id:"scrolltorow-coordinate-number-promise-void"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrolltorow-coordinate-number-promise-void"}},[e._v("#")]),e._v(" "),t("code",[e._v("scrollToRow(coordinate?: number) => Promise<void>")])]),e._v(" "),t("p",[e._v("Scrolls view port to specified row index")]),e._v(" "),t("h4",{attrs:{id:"returns-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-5"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("Promise<void>")])]),e._v(" "),t("h3",{attrs:{id:"setcelledit-row-number-prop-revogrid-columnprop-rowsource-revogrid-dimensionrows-promise-void"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setcelledit-row-number-prop-revogrid-columnprop-rowsource-revogrid-dimensionrows-promise-void"}},[e._v("#")]),e._v(" "),t("code",[e._v("setCellEdit(row: number, prop: RevoGrid.ColumnProp, rowSource?: RevoGrid.DimensionRows) => Promise<void>")])]),e._v(" "),t("p",[e._v("Bring cell to edit mode")]),e._v(" "),t("h4",{attrs:{id:"returns-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns-6"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("Promise<void>")])])])}),[],!1,null,null,null);o.default=d.exports}}]);