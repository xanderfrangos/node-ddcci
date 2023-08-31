export function _getVCP (monitorId: string, code: number): number;
export function _setVCP (monitorId: string, code: number, value: number): void;
export function _getCapabilities (monitorId: string): string;
export function _saveCurrentSettings (monitorId: string): boolean;
export function _refresh (): void;

export function getMonitorList (): string[];

export function getVCP (monitorId: string, code: number): number;
export function setVCP (monitorId: string, code: number, value: number): void;

export function getBrightness (monitorId: string): number;
export function getMaxBrightness (monitorId: string): number;
export function setBrightness (monitorId: string): void;

export function getContrast (monitorId: string): number;
export function getMaxContrast (monitorId: string): number;
export function setContrast (monitorId: string): void;

export function getCapabilities (monitorId: string): object;

export const vcp: {
    CODE_PAGE: 0x00;
    RESTORE_FACTORY_COLOR_DEFAULTS: 0x08;
    RESTORE_FACTORY_DEFAULTS: 0x04;
    RESTORE_FACTORY_GEOMETRY_DEFAULTS: 0x06;
    RESTORE_FACTORY_LUMINANCE_CONTRAST_DEFAULTS: 0x05;
    RESTORE_FACTORY_TV_DEFAULTS: 0x0a;
    SAVE_RESTORE_SETTINGS: 0xb0;
    SIX_AXIS_HUE_CONTROL_BLUE: 0x9f;
    SIX_AXIS_HUE_CONTROL_CYAN: 0x9e;
    SIX_AXIS_HUE_CONTROL_GREEN: 0x9d;
    SIX_AXIS_HUE_CONTROL_MAGENTA: 0xa0;
    SIX_AXIS_HUE_CONTROL_RED: 0x9b;
    SIX_AXIS_HUE_CONTROL_YELLOW: 0x9c;
    SIX_AXIS_SATURATION_CONTROL_BLUE: 0x5d;
    SIX_AXIS_SATURATION_CONTROL_CYAN: 0x5c;
    SIX_AXIS_SATURATION_CONTROL_GREEN: 0x5b;
    SIX_AXIS_SATURATION_CONTROL_MAGENTA: 0x5e;
    SIX_AXIS_SATURATION_CONTROL_RED: 0x59;
    SIX_AXIS_SATURATION_CONTROL_YELLOW: 0x5a;
    ADJUST_ZOOM: 0x7c;
    AUTO_COLOR_SETUP: 0x1f;
    AUTO_SETUP: 0x1e;
    AUTO_SETUP_ON_OFF: 0xa2;
    BACKLIGHT_CONTROL: 0x13;
    BACKLIGHT_LEVEL_BLUE: 0x71;
    BACKLIGHT_LEVEL_GREEN: 0x6f;
    BACKLIGHT_LEVEL_RED: 0x6d;
    BACKLIGHT_LEVEL_WHITE: 0x6b;
    BLOCK_LUT_OPERATION: 0x75;
    CLOCK: 0x0e;
    CLOCK_PHASE: 0x3e;
    COLOR_SATURATION: 0x8a;
    COLOR_TEMPERATURE_INCREMENT: 0x0b;
    COLOR_TEMPERATURE_REQUEST: 0x0c;
    CONTRAST: 0x12;
    DISPLAY_APPLICATION: 0xdc;
    FLESH_TONE_ENHANCEMENT: 0x11;
    FOCUS: 0x1c;
    GAMMA: 0x72;
    GRAY_SCALE_EXPANSION: 0x2e;
    HORIZONTAL_MOIRE: 0x56;
    HUE: 0x90;
    LUMINANCE: 0x10;
    LUT_SIZE: 0x73;
    SCREEN_ORIENTATION: 0xaa;
    SELECT_COLOR_PRESET: 0x14;
    SHARPNESS: 0x87;
    SINGLE_POINT_LUT_OPERATION: 0x74;
    STEREO_VIDEO_MODE: 0xd4;
    TV_BLACK_LEVEL_LUMINANCE: 0x92;
    TV_CONTRAST: 0x8e;
    TV_SHARPNESS: 0x8c;
    USER_COLOR_VISION_COMPENSATION: 0x17;
    VELOCITY_SCAN_MODULATION: 0x88;
    VERTICAL_MOIRE: 0x58;
    VIDEO_BLACK_LEVEL_BLUE: 0x70;
    VIDEO_BLACK_LEVEL_GREEN: 0x6e;
    VIDEO_BLACK_LEVEL_RED: 0x6c;
    VIDEO_GAIN_BLUE: 0x1a;
    VIDEO_GAIN_GREEN: 0x18;
    VIDEO_GAIN_RED: 0x16;
    WINDOW_BACKGROUND: 0x9a;
    WINDOW_CONTROL_ON_OFF: 0xa4;
    WINDOW_SELECT: 0xa5;
    WINDOW_SIZE: 0xa6;
    WINDOW_TRANSPARENCY: 0xa7;
    DISPLAY_CONTROLLER_ID: 0xc8;
    DISPLAY_FIRMWARE_LEVEL: 0xc9;
    DISPLAY_USAGE_TIME: 0xc6;
    HORIZONTAL_FREQUENCY: 0xac;
    IMAGE_MODE: 0xdb;
    OSD_BUTTON_LEVEL_CONTROL: 0xca;
    OSD_LANGUAGE: 0xcc;
    POWER_MODE: 0xd6;
    SOURCE_COLOR_CODING: 0xb5;
    SOURCE_TIMING_MODE: 0xb4;
    VERSION: 0xdf;
    VERTICAL_FREQUENCY: 0xae;
    BOTTOM_CORNER_FLARE: 0x4a;
    BOTTOM_CORNER_HOOK: 0x4c;
    DISPLAY_SCALING: 0x86;
    HORIZONTAL_CONVERGENCE_M_G: 0x29;
    HORIZONTAL_CONVERGENCE_R_B: 0x28;
    HORIZONTAL_KEYSTONE: 0x42;
    HORIZONTAL_LINEARITY: 0x2a;
    HORIZONTAL_LINEARITY_BALANCE: 0x2c;
    HORIZONTAL_MIRROR: 0x82;
    HORIZONTAL_PARALLELOGRAM: 0x40;
    HORIZONTAL_PINCUSHION: 0x24;
    HORIZONTAL_PINCUSHION_BALANCE: 0x26;
    HORIZONTAL_POSITION: 0x20;
    HORIZONTAL_SIZE: 0x22;
    ROTATION: 0x44;
    SCAN_MODE: 0xda;
    TOP_CORNER_FLARE: 0x46;
    TOP_CORNER_HOOK: 0x48;
    VERTICAL_CONVERGENCE_M_G: 0x39;
    VERTICAL_CONVERGENCE_R_B: 0x38;
    VERTICAL_KEYSTONE: 0x43;
    VERTICAL_LINEARITY: 0x3a;
    VERTICAL_LINEARITY_BALANCE: 0x3c;
    VERTICAL_MIRROR: 0x84;
    VERTICAL_PARALLELOGRAM: 0x41;
    VERTICAL_PINCUSHION: 0x34;
    VERTICAL_PINCUSHION_BALANCE: 0x36;
    VERTICAL_POSITION: 0x30;
    VERTICAL_SIZE: 0x32;
    WINDOW_POSITION_BR_X: 0x97;
    WINDOW_POSITION_BR_Y: 0x98;
    WINDOW_POSITION_TL_X: 0x95;
    WINDOW_POSITION_TL_Y: 0x96;
    ACTIVE_CONTROL: 0x52;
    AMBIENT_LIGHT_SENSOR: 0x66;
    APPLICATION_ENABLE_KEY: 0xc6;
    ASSET_TAG: 0xd2;
    AUXILIARY_DISPLAY_DATA: 0xcf;
    AUXILIARY_DISPLAY_SIZE: 0xce;
    AUXILIARY_POWER_OUTPUT: 0xd7;
    DEGAUSS: 0x01;
    DISPLAY_DESCRIPTOR_LENGTH: 0xc2;
    DISPLAY_IDENTIFICATION_DATA_OPERATION: 0x87;
    DISPLAY_TECHNOLOGY_TYPE: 0xb6;
    ENABLE_DISPLAY_OF_DISPLAY_DESCRIPTOR: 0xc4;
    FLAT_PANEL_SUB_PIXEL_LAYOUT: 0xb2;
    INPUT_SOURCE: 0x60;
    NEW_CONTROL_VALUE: 0x02;
    OUTPUT_SELECT: 0xd0;
    PERFORMANCE_PRESERVATION: 0x54;
    REMOTE_PROCEDURE_CALL: 0x76;
    SCRATCH_PAD: 0xde;
    SOFT_CONTROLS: 0x03;
    STATUS_INDICATORS: 0xcd;
    TRANSMIT_DISPLAY_DESCRIPTOR: 0xc3;
    TV_CHANNEL_UP_DOWN: 0x8b;
    AUDIO_BALANCE_L_R: 0x93;
    AUDIO_BASS: 0x91;
    AUDIO_JACK_CONNECTION_STATUS: 0x65;
    AUDIO_MICROPHONE_VOLUME: 0x64;
    AUDIO_MUTE: 0x8d;
    AUDIO_PROCESSOR_MODE: 0x94;
    AUDIO_SPEAKER_SELECT: 0x63;
    AUDIO_SPEAKER_VOLUME: 0x62;
    AUDIO_TREBLE: 0x8f;
    BODY_CRC_ERROR_COUNT: 0xbc;
    CLIENT_ID: 0xbd;
    HEADER_ERROR_COUNT: 0xbb;
    LINK_CONTROL: 0xbe;
    MONITOR_STATUS: 0xb7;
    MONITOR_X_ORIGIN: 0xb9;
    MONITOR_Y_ORIGIN: 0xba;
    PACKET_COUNT: 0xb8;
};
