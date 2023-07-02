const { Artist } = require('../models');

module.exports = {
    async getArtists(req, res) {
        const foundArtists = await Artist.find();

        res.json(foundArtists);
    },

    async getSingleArtist({ artist = null, params}, res) {
        const foundArtist = await Artist.findOne({
            $or: [{ _id: artist ? artist._id : params.id }, { artistName: params.artistName }],
        });

        if (!foundArtist) {
            return res.status(400).json({ message: 'Cannot find Artist with specified ID.' });
        }

        res.json(foundArtist);
    },

    async createArtist({ body }, res) {
        const artist = await Artist.create(body);

        if (!artist) {
            return res.status(400).json({ message: 'Please check entered data, something is missing.' });
        }
        res.json({ artist });
    },

    async addArt({ artist, body }, res) {
        try {
            const updatedArtist = await Artist.findOneAndUpdate(
                { _id: artist._id },
                { $addToSet: { art: body } },
                { new: true }
            );
            return res.json(updatedArtist);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async removeArt({ artist, params }, res) {
        const updatedArtist = await Artist.findOneAndUpdate(
            { _id: artist._id },
            { $pull: { art: { artId: params.artId } } },
            { new: true }
        );
        if (!updatedArtist) {
            return res.status(404).json({ message: 'Unable to find Artist specified.' });
        }
        return res.json(updatedArtist);
    },
};