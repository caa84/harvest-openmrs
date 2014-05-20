define(["underscore","marionette","../base","../core"],function(e,t,i,s){var o=t.ItemView.extend({className:"context-filter",template:"context/filter",ui:{actions:"[data-target=actions]",loader:"[data-target=loader]",remove:"[data-action=remove]",enable:"[data-action=enable]",description:"[data-target=description]",required:"[data-target=required]"},events:{click:"clickShow","click @ui.remove":"clickRemove","click @ui.enable":"toggleEnabled"},modelEvents:{request:"showLoadView",sync:"hideLoadView",error:"hideLoadView",change:"render"},clickShow:function(){s.router.navigate("query",{trigger:!0}),s.trigger(s.CONCEPT_FOCUS,this.model.get("concept"))},clickRemove:function(){this.model.unapply()},toggleEnabled:function(e){e.stopPropagation(),this.model.toggleEnabled()},renderEnabled:function(){this.$el.removeClass("disabled"),this.ui.enable.attr("title","Disable"),this.ui.enable.prop("checked",!0)},renderDisabled:function(){this.$el.addClass("disabled"),this.ui.enable.attr("title","Enable"),this.ui.enable.prop("checked",!1)},renderState:function(){this.model.get("enabled")!==!1?this.renderEnabled():this.renderDisabled()},renderDescription:function(){this.ui.description.html(this.model.get("language"))},showLoadView:function(){this.ui.loader.show(),this.ui.description.hide()},hideLoadView:function(){this.ui.loader.hide(),this.ui.description.show()},onRender:function(){this.ui.actions.toggle(!this.model.get("required")),this.ui.enable.toggle(!this.model.get("required")),this.ui.required.toggle(this.model.get("required")===!0),this.ui.required.tooltip({container:"body",placement:"left",delay:500}),this.renderDescription(),this.renderState()}}),r=i.EmptyView.extend({template:"context/empty",ui:{noFiltersResultsMessage:".no-filters-results-workspace",noFiltersQueryMessage:".no-filters-query-workspace"},onRender:function(){this.listenTo(s.router,"route",this.toggleMessage),this.toggleMessage()},onClose:function(){this.stopListening(s.router)},toggleMessage:function(){s.router.isCurrent("results")?(this.ui.noFiltersQueryMessage.hide(),this.ui.noFiltersResultsMessage.show()):s.router.isCurrent("query")&&(this.ui.noFiltersQueryMessage.show(),this.ui.noFiltersResultsMessage.hide())}}),n=t.CollectionView.extend({itemView:o,emptyView:r});return{ContextFilter:o,ContextFilters:n,ContextNoFilters:r}});
//# sourceMappingURL=filters.js.map