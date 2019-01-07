import { colors } from "../colors";
import { utils } from "../settings";

const listGroupItem = {
  colors: {
    primary: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.blueAlertText,
      backgroundColor: colors.blueAlertBorder,
      backgroundColorHoverFocusAction: colors.blueAlertBorderTop,
      backgroundColorActive: colors.blueAlertText,
      backgroundColorHoverFocusActive: colors.blueAlertText,
      borderColorActive: colors.blueAlertText,
      borderColor: colors.borderCard
    },
    secondary: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.grayAlertText,
      backgroundColor: colors.grayAlertBorder,
      backgroundColorHoverFocusAction: colors.grayAlertBorderTop,
      backgroundColorActive: colors.grayAlertText,
      backgroundColorHoverFocusActive: colors.grayAlertText,
      borderColorActive: colors.grayAlertText,
      borderColor: colors.borderCard
    },
    success: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.greenAlertText,
      backgroundColor: colors.greenAlertBorder,
      backgroundColorHoverFocusAction: colors.greenAlertBorderTop,
      backgroundColorActive: colors.greenAlertText,
      backgroundColorHoverFocusActive: colors.greenAlertText,
      borderColorActive: colors.greenAlertText,
      borderColor: colors.borderCard
    },
    info: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.cyanAlertText,
      backgroundColor: colors.cyanAlertBorder,
      backgroundColorHoverFocusAction: colors.cyanAlertBorderTop,
      backgroundColorActive: colors.cyanAlertText,
      backgroundColorHoverFocusActive: colors.cyanAlertText,
      borderColorActive: colors.cyanAlertText,
      borderColor: colors.borderCard
    },
    warning: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.yellowAlertText,
      backgroundColor: colors.yellowAlertBorder,
      backgroundColorHoverFocusAction: colors.yellowAlertBorderTop,
      backgroundColorActive: colors.yellowAlertText,
      backgroundColorHoverFocusActive: colors.yellowAlertText,
      borderColorActive: colors.yellowAlertText,
      borderColor: colors.borderCard
    },
    danger: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.redAlertText,
      backgroundColor: colors.redAlertBorder,
      backgroundColorHoverFocusAction: colors.redAlertBorderTop,
      backgroundColorActive: colors.redAlertText,
      backgroundColorHoverFocusActive: colors.redAlertText,
      borderColorActive: colors.redAlertText,
      borderColor: colors.borderCard
    },
    light: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.gray100AlertText,
      backgroundColor: colors.gray100AlertBorder,
      backgroundColorHoverFocusAction: colors.gray100AlertBorderTop,
      backgroundColorActive: colors.gray100AlertText,
      backgroundColorHoverFocusActive: colors.gray100AlertText,
      borderColorActive: colors.gray100AlertText,
      borderColor: colors.borderCard
    },
    dark: {
      colorDisabled: colors.gray,
      backgroundColorDisabled: colors.white,
      colorActive: colors.white,
      color: colors.gray800AlertText,
      backgroundColor: colors.gray800AlertBorder,
      backgroundColorHoverFocusAction: colors.gray800AlertBorderTop,
      backgroundColorActive: colors.gray800AlertText,
      backgroundColorHoverFocusActive: colors.gray800AlertText,
      borderColorActive: colors.gray800AlertText,
      borderColor: colors.borderCard
    },
    default: {
      colorDisabled: colors.gray,
      backgroundColor: colors.white,
      backgroundColorDisabled: colors.white,
      backgroundColorAction: colors.gray100,
      backgroundColorHoverFocusAction: colors.gray100,
      color: colors.gray700,
      colorActive: colors.white,
      colorAction: colors.gray700,
      borderColor: colors.borderCard,
      borderColorActive: colors.blue,
      backgroundColorActive: colors.blue
    }
  },
  padding: {
    default: "0.75rem 1.25rem"
  },
  border: {
    default: utils.borders[1]
  },
  borderRadius: utils.borderRadius
};

export { listGroupItem };