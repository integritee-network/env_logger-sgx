var searchIndex = JSON.parse('{\
"env_logger":{"doc":"A simple logger configured via environment variables which…","i":[[3,"Env","env_logger","Set of environment variables to configure from.",null,null],[3,"Logger","","The env logger.",null,null],[3,"Builder","","`Builder` acts as builder for initializing a `Logger`.",null,null],[4,"Target","","Log target, either `stdout` or `stderr`.",null,null],[13,"Stdout","","Logs will be sent to standard output.",0,null],[13,"Stderr","","Logs will be sent to standard error.",0,null],[4,"WriteStyle","","Whether or not to print styles to the target.",null,null],[13,"Auto","","Try to print styles, but don\'t force the issue.",1,null],[13,"Always","","Try very hard to print styles.",1,null],[13,"Never","","Never print styles.",1,null],[5,"try_init","","Attempts to initialize the global logger with an env logger.",null,[[],[["setloggererror",3],["result",4]]]],[5,"init","","Initializes the global logger with an env logger.",null,[[]]],[5,"try_init_from_env","","Attempts to initialize the global logger with an env…",null,[[],[["setloggererror",3],["result",4]]]],[5,"init_from_env","","Initializes the global logger with an env logger from the…",null,[[]]],[5,"builder","","Create a new builder with the default environment variables.",null,[[],["builder",3]]],[5,"from_env","","Create a builder from the given environment variables.",null,[[],["builder",3]]],[0,"filter","","Filtering for log records.",null,null],[3,"Filter","env_logger::filter","A log filter.",null,null],[3,"Builder","","A builder for a log filter.",null,null],[11,"filter","","Returns the maximum `LevelFilter` that this filter…",2,[[],["levelfilter",4]]],[11,"matches","","Checks if this record matches the configured filter.",2,[[["record",3]]]],[11,"enabled","","Determines if a log message with the specified metadata…",2,[[["metadata",3]]]],[11,"new","","Initializes the filter builder with defaults.",3,[[],["builder",3]]],[11,"from_env","","Initializes the filter builder from an environment.",3,[[],["builder",3]]],[11,"filter_module","","Adds a directive to the filter for a specific module.",3,[[["levelfilter",4]]]],[11,"filter_level","","Adds a directive to the filter for all modules.",3,[[["levelfilter",4]]]],[11,"filter","","Adds a directive to the filter.",3,[[["option",4],["levelfilter",4]]]],[11,"parse","","Parses the directives string.",3,[[]]],[11,"build","","Build a log filter.",3,[[],["filter",3]]],[0,"fmt","env_logger","Formatting for log records.",null,null],[3,"Timestamp","env_logger::fmt","An [RFC3339] formatted timestamp.",null,null],[3,"Style","","A set of styles to apply to the terminal output.",null,null],[3,"StyledValue","","A value that can be printed using the given styles.",null,null],[3,"Formatter","","A formatter to write logs into.",null,null],[4,"Color","","The set of available colors for the terminal…",null,null],[13,"Black","","",4,null],[13,"Blue","","",4,null],[13,"Green","","",4,null],[13,"Red","","",4,null],[13,"Cyan","","",4,null],[13,"Magenta","","",4,null],[13,"Yellow","","",4,null],[13,"White","","",4,null],[13,"Ansi256","","",4,null],[13,"Rgb","","",4,null],[4,"Target","","Log target, either `stdout` or `stderr`.",null,null],[13,"Stdout","","Logs will be sent to standard output.",0,null],[13,"Stderr","","Logs will be sent to standard error.",0,null],[4,"WriteStyle","","Whether or not to print styles to the target.",null,null],[13,"Auto","","Try to print styles, but don\'t force the issue.",1,null],[13,"Always","","Try very hard to print styles.",1,null],[13,"Never","","Never print styles.",1,null],[4,"TimestampPrecision","","Formatting precision of timestamps.",null,null],[13,"Seconds","","Full second precision (0 decimal digits)",5,null],[13,"Millis","","Millisecond precision (3 decimal digits)",5,null],[13,"Micros","","Microsecond precision (6 decimal digits)",5,null],[13,"Nanos","","Nanosecond precision (9 decimal digits)",5,null],[11,"timestamp","","Get a [`Timestamp`] for the current date and time in UTC.",6,[[],["timestamp",3]]],[11,"timestamp_seconds","","Get a [`Timestamp`] for the current date and time in UTC…",6,[[],["timestamp",3]]],[11,"timestamp_millis","","Get a [`Timestamp`] for the current date and time in UTC…",6,[[],["timestamp",3]]],[11,"timestamp_micros","","Get a [`Timestamp`] for the current date and time in UTC…",6,[[],["timestamp",3]]],[11,"timestamp_nanos","","Get a [`Timestamp`] for the current date and time in UTC…",6,[[],["timestamp",3]]],[11,"style","","Begin a new [`Style`].",6,[[],["style",3]]],[11,"default_level_style","","Get the default [`Style`] for the given level.",6,[[["level",4]],["style",3]]],[11,"default_styled_level","","Get a printable [`Style`] for the given level.",6,[[["level",4]],[["level",4],["styledvalue",3]]]],[11,"set_color","","Set the text color.",7,[[["color",4]],["style",3]]],[11,"set_bold","","Set the text weight.",7,[[],["style",3]]],[11,"set_intense","","Set the text intensity.",7,[[],["style",3]]],[11,"set_bg","","Set the background color.",7,[[["color",4]],["style",3]]],[11,"value","","Wrap a value in the style.",7,[[],["styledvalue",3]]],[17,"DEFAULT_FILTER_ENV","env_logger","The default name for the environment variable to read…",null,null],[17,"DEFAULT_WRITE_STYLE_ENV","","The default name for the environment variable to read…",null,null],[11,"new","","Initializes the log builder with defaults.",8,[[],["builder",3]]],[11,"from_env","","Initializes the log builder from the environment.",8,[[]]],[11,"parse_env","","Applies the configuration from the environment.",8,[[]]],[11,"from_default_env","","Initializes the log builder from the environment using…",8,[[]]],[11,"parse_default_env","","Applies the configuration from the environment using…",8,[[]]],[11,"format","","Sets the format function for formatting the log output.",8,[[]]],[11,"default_format","","Use the default format.",8,[[]]],[11,"format_level","","Whether or not to write the level in the default format.",8,[[]]],[11,"format_module_path","","Whether or not to write the module path in the default…",8,[[]]],[11,"format_indent","","Configures the amount of spaces to use to indent multiline…",8,[[["option",4]]]],[11,"format_timestamp","","Configures if timestamp should be included and in what…",8,[[["option",4],["timestampprecision",4]]]],[11,"format_timestamp_secs","","Configures the timestamp to use second precision.",8,[[]]],[11,"format_timestamp_millis","","Configures the timestamp to use millisecond precision.",8,[[]]],[11,"format_timestamp_micros","","Configures the timestamp to use microsecond precision.",8,[[]]],[11,"format_timestamp_nanos","","Configures the timestamp to use nanosecond precision.",8,[[]]],[11,"filter_module","","Adds a directive to the filter for a specific module.",8,[[["levelfilter",4]]]],[11,"filter_level","","Adds a directive to the filter for all modules.",8,[[["levelfilter",4]]]],[11,"filter","","Adds filters to the logger.",8,[[["option",4],["levelfilter",4]]]],[11,"parse_filters","","Parses the directives string in the same form as the…",8,[[]]],[11,"target","","Sets the target for the log output.",8,[[["target",4]]]],[11,"write_style","","Sets whether or not styles will be written.",8,[[["writestyle",4]]]],[11,"parse_write_style","","Parses whether or not to write styles in the same form as…",8,[[]]],[11,"is_test","","Sets whether or not the logger will be used in unit tests.",8,[[]]],[11,"try_init","","Initializes the global logger with the built env logger.",8,[[],[["setloggererror",3],["result",4]]]],[11,"init","","Initializes the global logger with the built env logger.",8,[[]]],[11,"build","","Build an env logger.",8,[[],["logger",3]]],[11,"from_env","","Creates the logger from the environment.",9,[[]]],[11,"from_default_env","","Creates the logger from the environment using default…",9,[[]]],[11,"filter","","Returns the maximum `LevelFilter` that this env logger…",9,[[],["levelfilter",4]]],[11,"matches","","Checks if this record matches the configured filter.",9,[[["record",3]]]],[11,"new","","Get a default set of environment variables.",10,[[]]],[11,"filter","","Specify an environment variable to read the filter from.",10,[[]]],[11,"filter_or","","Specify an environment variable to read the filter from.",10,[[]]],[11,"default_filter_or","","Use the default environment variable to read the filter…",10,[[]]],[11,"write_style","","Specify an environment variable to read the style from.",10,[[]]],[11,"write_style_or","","Specify an environment variable to read the style from.",10,[[]]],[11,"default_write_style_or","","Use the default environment variable to read the style from.",10,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","env_logger::filter","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","env_logger::fmt","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_string","","",11,[[],["string",3]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_string","","",12,[[],["string",3]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","env_logger","",10,[[]]],[11,"clone","env_logger::fmt","",7,[[],["style",3]]],[11,"clone","","",4,[[],["color",4]]],[11,"clone","env_logger","",0,[[],["target",4]]],[11,"clone","","",1,[[],["writestyle",4]]],[11,"clone","env_logger::fmt","",5,[[],["timestampprecision",4]]],[11,"default","env_logger::filter","",3,[[]]],[11,"default","env_logger","",0,[[]]],[11,"default","","",1,[[]]],[11,"default","env_logger::fmt","",5,[[]]],[11,"default","env_logger","",8,[[],["builder",3]]],[11,"default","","",10,[[]]],[11,"eq","env_logger::fmt","",4,[[["color",4]]]],[11,"ne","","",4,[[["color",4]]]],[11,"eq","env_logger","",0,[[["target",4]]]],[11,"eq","","",1,[[["writestyle",4]]]],[11,"fmt","env_logger::filter","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","env_logger::fmt","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","env_logger","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","env_logger::fmt","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","env_logger","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","env_logger::fmt","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"hash","env_logger","",0,[[]]],[11,"hash","","",1,[[]]],[11,"fmt","env_logger::fmt","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"write","","",6,[[],["result",6]]],[11,"flush","","",6,[[],["result",6]]],[11,"enabled","env_logger","",9,[[["metadata",3]]]],[11,"log","","",9,[[["record",3]]]],[11,"flush","","",9,[[]]]],"p":[[4,"Target"],[4,"WriteStyle"],[3,"Filter"],[3,"Builder"],[4,"Color"],[4,"TimestampPrecision"],[3,"Formatter"],[3,"Style"],[3,"Builder"],[3,"Logger"],[3,"Env"],[3,"Timestamp"],[3,"StyledValue"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);