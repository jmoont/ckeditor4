<?php
/**
 * CKEditor4 plugin for Craft CMS 3.x
 *
 * CKEditor 4 for Craft CMS
 *
 * @link      twitter.com/moonty
 * @copyright Copyright (c) 2018 Josh Moont
 */

namespace jmoont\ckeditor4\assetbundles\ckeditor4field;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    Josh Moont
 * @package   CKEditor4
 * @since     1.0.0
 */
class CKEditor4Asset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = dirname(__DIR__, 3).'/lib/ckeditor/dist';

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'ckeditor.js',
        ];

        $this->css = [
            'skins/moono-lisa/editor.css',
        ];

        parent::init();
    }
}
