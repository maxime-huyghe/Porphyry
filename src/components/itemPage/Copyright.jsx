import { Trans } from '@lingui/macro';

/**
 * A simple copyright notice.
 */
const Copyright = ({ creator, created }) =>
  creator
    ? (
      <p className="pb-3">
        <Trans>© {creator}, {created}</Trans>
      </p>
    )
    : null;

export default Copyright;