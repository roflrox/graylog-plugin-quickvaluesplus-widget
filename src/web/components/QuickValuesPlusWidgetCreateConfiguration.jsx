import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/bootstrap';
import CreateReactClass from 'create-react-class'

const QuickValuesPlusWidgetCreateConfiguration = CreateReactClass({
  propTypes: {
    config: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  },

  getInitialConfiguration() {
    return {
        top_values: 5,
        table_size: 50,
        sort_order: 'descending',
        show_pie_chart: true,
        show_data_table: true,
        display_add_to_search_button: true,
        display_remove_from_search_button: true,
        display_term_hyperlinks: true,
        display_exclude_from_query_button: true,
        display_get_term_reply_in_new_window_button: true,
    };
  },

  render() {
    return (
      <fieldset>
        <Input key="dataTopValues"
               type="text"
               id="quickvaluesplus-top-values"
               name="top_values"
               label="Number of Top Values"
               value={this.props.config.top_values}
               onChange={this.props.onChange}
               help="Modify the number of results that are considered Top Values in the table."/>

        <Input key="dataTableSize"
               type="text"
               id="quickvaluesplus-tables-size"
               name="table_size"
               label="Size of Table"
               value={this.props.config.table_size}
               onChange={this.props.onChange}
               help="Modify the number of results in the table."/>

             <label for="quickvaluesplus-sort-order-descending" className="control-label"><span>Sort Order</span></label>
          <div className="radio">
              <label>
                  <input key="dataSortOrderDesc"  id="quickvaluesplus-sort-order-descending" type="radio" name="sort_order" value="descending"
                         onChange={this.props.onChange}
                         checked={this.props.config.sort_order === "descending"} />
                  Descending
              </label>
          </div>
          <div className="radio">
              <label>
                  <input key="dataSortOrderAsc" id="quickvaluesplus-sort-order-ascending" type="radio" name="sort_order" value="ascending"
                         onChange={this.props.onChange}
                         checked={this.props.config.sort_order === "ascending"} />
                  Ascending
              </label>
          </div>

        <Input key="showPieChart"
               type="checkbox"
               id="quickvaluesplus-show-pie-chart"
               name="show_pie_chart"
               label="Show pie chart"
               checked={this.props.config.show_pie_chart}
               onChange={this.props.onChange}
               help="Include a pie chart representation of the data." />

        <Input key="showDataTable"
               type="checkbox"
               id="quickvaluesplus-show-data-table"
               name="show_data_table"
               label="Show data table"
               checked={this.props.config.show_data_table}
               onChange={this.props.onChange}
               help="Include a table with quantitative information." />

          <Input key="displayTermHyperlinks"
                 type="checkbox"
                 id="quickvaluesplus-display-term_hyperlinks"
                 name="display_term_hyperlinks"
                 label="Display Term Hyperlinks"
                 checked={this.props.config.display_term_hyperlinks}
                 onChange={this.props.onChange}
                 help="Turn off hyperlinks for the term." />

         <Input key="displayExludeFromQueryButton"
               type="checkbox"
               id="quickvaluesplus-display-exclude-from-query-button"
               name="display_exclude_from_query_button"
               label="Display Exclude From Query Button"
               checked={this.props.config.display_exclude_from_query_button}
               onChange={this.props.onChange}
               help="Column containing a exclude from Query button." />

         <Input key="displayGetTermReplyInNewWindowButton"
               type="checkbox"
               id="quickvaluesplus-display-get-term-reply-in-new-window-button"
               name="display_get_term_reply_in_new_window_button"
               label="Display Get Term Reply In New Window Button"
               checked={this.props.config.display_get_term_reply_in_new_window_button}
               onChange={this.props.onChange}
               help="Column containing a get term reply in new window button." />
      </fieldset>
    );
  },
});

export default QuickValuesPlusWidgetCreateConfiguration;
