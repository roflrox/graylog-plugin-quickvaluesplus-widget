package org.graylog.plugins.quickvaluesplus;

import org.graylog2.plugin.Plugin;
import org.graylog2.plugin.PluginMetaData;
import org.graylog2.plugin.PluginModule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collection;
import java.util.Collections;

/**
 * Implement the Plugin interface here.
 */
public class QuickValuesPlusWidgetPlugin implements Plugin {
    private static final Logger LOG = LoggerFactory.getLogger(QuickValuesPlusWidgetPlugin.class);
    @Override
    public PluginMetaData metadata() {
        LOG.debug("Creating new Metadata");
        return new QuickValuesPlusWidgetMetaData();
    }

    @Override
    public Collection<PluginModule> modules () {
        return Collections.<PluginModule>singletonList(new QuickValuesPlusWidgetModule());
    }


}
